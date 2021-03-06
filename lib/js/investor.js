ShowHide = function (divId) {
    if (document.getElementById(divId).style.display == 'none') {
        var alltexts = document.getElementsByClassName('mid');
        for (var i = 0; i < alltexts.length; i++)
            alltexts[i].style.display = 'none';
        document.getElementById(divId).style.display = 'block';
    } else {
        document.getElementById(divId).style.display = 'none';
    }
}


function showApp(a) {
    var aside = document.getElementById('aside');
    var arr = aside.getElementsByTagName('span');
    for (i = 0; i < arr.length; i++) {
        if (arr[i].getAttribute('id') != a) {
            arr[i].style.visibility = 'hidden';
        }
    }
    x = document.getElementById(a);
    var state;
    if (x.style.visibility == 'visible') {
        state = 'hidden';
    } else {
        state = 'visible';
    }
    x.style.visibility = state;
}

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function open_model_id_01() {
    document.getElementById('id01').style.display='block'; //displays modal
    document.body.querySelectorAll("*").forEach(el => el.classList.add("blur"))//adds blur class to everything on the page
    document.body.querySelectorAll("#id01 *").forEach(el => el.classList.remove("blur"));//removes blur from children of the modal 
    document.getElementById("id01").classList.remove("blur")//removes blur from modal div
}

function close_model_id_01() {
    document.getElementById('id01').style.display='none';
    document.body.querySelectorAll("*").forEach(el => el.classList.remove("blur"));
}

function close_model_id_01b() {
    onclick="document.getElementById('id01').style.display='none'";
}

document.getElementsByClassName("tablink")[0].click();
                        
function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
    tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    close_model_id_01();
    }
}