document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");


//declare image variable
var img = document.getElementsByTagName('img');
//var background = document.bgColor('background-color');
//var bgcolorlist = ["#ff8c7b", "#c3cd65", "#0f98ab", "#ff8247", "#f6cf46", "#d73d4e"]

// declare all png variables
var amsterdam = document.getElementById('amsterdam');
var budapest = document.getElementById('budapest');
var dublin = document.getElementById('dublin');
var dubrovnik = document.getElementById('dubrovnik');
var valencia = document.getElementById('valencia');
//declare all pop up window variables
var desc = document.getElementById('description');
var amsterdamDesc =document.getElementById('amsterdamDesc');
var budapestDesc = document.getElementById('budapestDesc');
var dublinDesc = document.getElementById('dublinDesc');
var dubrovnikDesc = document.getElementById('dubrovnikDesc');
var valenciaDesc = document.getElementById('valenciaDesc');
// delcare close variable
var close = document.getElementById('close');

/* make background color rotate on click
bgcolorlist.addEventListener('click', function()
{
  bgcolorlist.body.style.background=bgcolorlist[Math.floor(Math.random()*bgcolorlist.length)]
}*/

// make all the functions for hovering effects
amsterdam.addEventListener('mouseover', function()
{
  amsterdam.style.transition = "filter .5s";
});

amsterdam.addEventListener('mouseout', function()
{
  amsterdam.style.transition = "filter .5s";
})

budapest.addEventListener('mouseover', function()
{
  budapest.style.transition = "filter .5s";
})

budapest.addEventListener('mouseout', function()
{
  budapest.style.transition = "filter .5s";
})

dublin.addEventListener('mouseover', function()
{
  dublin.style.transition = "filter .5s";
})

dublin.addEventListener('mouseout', function()
{
  dublin.style.transition = "filter .5s";
})

dubrovnik.addEventListener('mouseover', function()
{
  dubrovnik.style.transition = "filter .5s";
})

dubrovnik.addEventListener('mouseout', function()
{
  dubrovnik.style.transition = "filter .5s";
})

valencia.addEventListener('mouseover', function()
{
  valencia.style.transition = "filter .5s";
})

valencia.addEventListener('mouseout', function()
{
  valencia.style.transition = "filter .5s";
})

//make all the functions for the pop up info click functions

amsterdam.addEventListener('click', function()
{
  desc.style.display = "block";
  amsterdamDesc.style.display = "block";
})

budapest.addEventListener('click', function()
{
  desc.style.display = "block";
  budapestDesc.style.display = "block";
})

dublin.addEventListener('click', function()
{
  desc.style.display = "block";
  dublinDesc.style.display = "block";
})

dubrovnik.addEventListener('click', function()
{
  desc.style.display = "block";
  dubrovnikDesc.style.display = "block";
})

valencia.addEventListener('click', function()
{
  desc.style.display = "block";
  valenciaDesc.style.display = "block";
})

// close function

close.addEventListener('click', function()
{
  desc.style.display="none";
  amsterdamDesc.style.display = "none";
  budapestDesc.style.display = "none";
  dubrovnikDesc.style.display = "none";
  dublinDesc.style.display = "none";
  valenciaDesc.style.display = "none";
})

});
