{
    window.onscroll = function() {
    var navbar = document.getElementById("modNav");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 360) {
      navbar.style.backgroundColor = "white";
    } else {
      navbar.style.backgroundColor = "#ffc017";
    } 
  }
}

// {

//     window.onscroll = function() {
//         var navbar = document.getElementById("modBtn");
//         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 360) {
//             navbar.style.backgroundColor = "green";
//         } else {
//             navbar.style.backgroundColor = "black";
//         } 
//     }
// }