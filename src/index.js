(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy,
    dayMonth = "05/06/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
  
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        // modified lines to print 2 digits with 0 appended at the start
        document.getElementById("days").innerText = String(Math.floor(distance / (day))).padStart(2, "0");
        document.getElementById("hours").innerText = String(Math.floor((distance % (day)) / (hour))).padStart(2, "0");
        document.getElementById("minutes").innerText = String(Math.floor((distance % (hour)) / (minute))).padStart(2, "0");
        document.getElementById("seconds").innerText = String(Math.floor((distance % (minute)) / second)).padStart(2, "0");

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

//status_code_0 animation
new TypeIt("#element", { 
  lifeLike: false, 
  speed: 0 
})
.type("s")
.pause(135)
.type("t")
.pause(141)
.type("a")
.pause(138)
.type("t")
.pause(102)
.type("y")
.pause(84)
.type("s")
.pause(300)
.delete(1)
.pause(187)
.delete(1)
.pause(357)
.type("u")
.pause(69)
.type("s")
.pause(243)
.type("_")
.pause(298)
.type("c")
.pause(133)
.type("o")
.pause(10)
.type("o")
.pause(287)
.type("d")
.pause(186)
.type("e")
.pause(295)
.move(-2)
.pause(140)
.delete(1)
.pause(130)
.move(null, { to: "END" })
.pause(192)
.delete(1)
.pause(329)
.type("e")
.pause(501)
.type("_")
.pause(956)
.type("0")
.go();


// var collapsible = document.getElementsByClassName("faq-collapsible");

// for (var i = 0; i < collapsible.length; i++) {
//   collapsible[i].onclick = function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "em";
//     }
//   };

  
// }

function openTab(evt, tabName, bgColor, color) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    console.log("hello");
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].style.backgroundColor = " ";
    tablinks[i].style.color = " ";

    console.log("hello2");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  evt.style.backgroundColor = bgColor;
  evt.style.color = color;
}

document.getElementById("defaultOpen").click();
