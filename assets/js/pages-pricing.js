"use strict";document.addEventListener("DOMContentLoaded",(function(e){!function(){const e=document.querySelector(".price-duration-toggler"),n=[].slice.call(document.querySelectorAll(".price-monthly")),c=[].slice.call(document.querySelectorAll(".price-yearly"));function t(){e.checked?(c.map((function(e){e.classList.remove("d-none")})),n.map((function(e){e.classList.add("d-none")}))):(c.map((function(e){e.classList.add("d-none")})),n.map((function(e){e.classList.remove("d-none")})))}t(),e.onchange=function(){t()}}()}));