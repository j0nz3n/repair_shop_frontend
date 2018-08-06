# Reapir Shop Frontend


<h3>Task :</h3>
<hr>
Using a template for starting front-end  with webpack for `require` system, build
pipeline, and development server boostrap and Handlebars.js included. No
front-end frameworks included. 
<BR />
<BR />

<h3>Vision:</h3>
<hr>
Having experience bot as a Technician and a customer, my goal was to design a we app for a shop that Icould see myself personaly using in either role.
<BR />
<BR />

<h3>Wireframe:</h3>
<hr>

On page load

<img src="/Users/j0nz3n/dev/wdi/projects/repair_shop/frontend/assets/img/onPageLoad.png">

Login Clicked

<img src="/Users/j0nz3n/dev/wdi/projects/repair_shop/frontend/assets/img/Login Clicked.png">

Customer Home

<img src="/Users/j0nz3n/dev/wdi/projects/repair_shop/frontend/assets/img/customerHome.png">

My Devices

<img src="/Users/j0nz3n/dev/wdi/projects/repair_shop/frontend/assets/img/myDevices.png">

Repair Status

<img src="/Users/j0nz3n/dev/wdi/projects/repair_shop/frontend/assets/img/repairStatus.png">
<BR />
<BR />

<h3>Challenges Faced:</h3>
<hr>
<u>Learning Handlebars with this project.</u>
<ul>
<li>Handlebars is a very usefule templating tool
<li> Simple too impliment
<li> Difficult to master
</ul>

My biggest take away from using Hanglebars was how and when the DOM recognizes elements. In particular the fact that css styles are NOT applied to elements that are not present in the DOM when the document is loaded. I had apply styles in the `.handlebars` file directly.

The same can be can be said in reference to jQuery.

In some parts of my code I elected to use string interpolation HTML templates. The reason bing that I applied js logic to the JSON object returned from the backend.
