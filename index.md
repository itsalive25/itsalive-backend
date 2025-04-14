---
layout: layouts/layout.njk
title: "One-Pager"
---
<!-- [Assignments](/assignments)  
[Links](/links)  
[Minutes](/minutes)  
 -->


{% set sortedSections = collections.section | sort(attribute="data.order") %}
{% for item in sortedSections %}

{% if item.data.order > 1 %}
<div class="pagina"> {{ item.data.order }} </div>
{% endif %}
{% if item.data.order > 2 %}
   <a href="#index" class="arrow">▲</a>
{% endif %}

<section id="{{ item.data.title | slug }}">
	
  {{ item.templateContent | safe }}
</section>
{% endfor %}



