// .eleventy.js

const { DateTime } = require("luxon");
const { JSDOM } = require("jsdom");

module.exports = function(eleventyConfig) {
  // Passthroughs für statische Dateien
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.css");
  eleventyConfig.addPassthroughCopy("**/*.woff");
  eleventyConfig.addPassthroughCopy("**/*.woff2");
  eleventyConfig.addPassthroughCopy("**/*.ttf");
  eleventyConfig.addPassthroughCopy("**/*.zip");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.mp4");
  eleventyConfig.addPassthroughCopy("**/*.yml");

  // Filter: Fügt "_blank" und "rel" Attribute zu Links hinzu
  eleventyConfig.addFilter("addTargetBlank", function(content) {
    const dom = new JSDOM(content);
    const links = dom.window.document.querySelectorAll("a");

    links.forEach(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });

    return dom.serialize();
  });

  // Registrierung des Shortcodes: renderSection
  eleventyConfig.addNunjucksAsyncShortcode("renderSection", async function (section) {
    // Sicherstellen, dass section eine gültige Eingabe ist
    if (!section || !section.inputContent || !section.inputPath) {
      throw new Error('Missing section content or path');
    }
    return await this.renderTemplate(section.inputContent, section.inputPath, section.data);
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",      
      output: "_site"  
    }
  };
};
