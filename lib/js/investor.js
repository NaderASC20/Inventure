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

// Collapsible


