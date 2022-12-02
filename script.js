var photo = document.getElementById("photo");
var block = document.getElementById("block");

function jump() {
  if (photo.classList != "animate") photo.classList.add("animate");
  setTimeout(function () {
    photo.classList.remove("animate");
  }, 500);
}

var checkDead = setInterval(function () {
  var photoTop = parseInt(
    window.getComputedStyle(photo).getPropertyValue("top")
  );
  var blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft < 20 && blockLeft > 0 && photoTop >= 145) {
    block.style.animation = "none";
    block.style.display = "none";
    var sdn = new Audio("./assets/Wah Kya Scene Hai Modi Ji.mp3");
    sdn.play();
    setTimeout(function () {
      alert("modiji har gaye!!");
    }, 1000);
  }
}, 10);
