/* ACCORDION */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (!this.children[2]) {
            if (panel.style.display === "flex") {
                panel.style.display = "none";
                this.children[0].style.display = 'block';
                this.children[1].style.display = 'none';
            } else {
                panel.style.display = "flex";
                this.children[0].style.display = 'none';
                this.children[1].style.display = 'block';
            }
        } else {
            if (panel.style.display === "flex") {
                panel.style.display = "none";
                this.children[1].style.display = 'block';
                this.children[2].style.display = 'none';
            } else {
                panel.style.display = "flex";
                this.children[1].style.display = 'none';
                this.children[2].style.display = 'block';
            }
        }
    })
};