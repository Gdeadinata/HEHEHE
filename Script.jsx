var ngk = document.querySelector(".ngk");
var ya = document.querySelector(".ya");
var hiddenMessage = document.getElementById("hiddenMessage");
var position = 0;

ngk.addEventListener("mouseover", function() {
    position = position === 0 ? -150 : 0;
    ngk.style.transform = `translate(${position}px, 0px)`;
    hiddenMessage.style.display = "block";
});

ngk.addEventListener("mouseout", function() {
    hiddenMessage.style.display = "none";
});

ya.addEventListener("click", function() {
    alert("Gitu dongg, aku otw ttgu depan ya 😊");
});

