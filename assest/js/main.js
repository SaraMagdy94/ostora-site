$(document).ready(function() {

    // area meter
    var slider = document.getElementById("metr-rang");
    var output = document.getElementById("value-erea");
    output.innerHTML = slider.value;
    slider.oninput = function() {
            output.innerHTML = this.value;
        }
        // price 
    var sliderPrice = document.getElementById("price-rang");
    var outputPrice = document.getElementById("value-price");
    outputPrice.innerHTML = sliderPrice.value;
    sliderPrice.oninput = function() {
            outputPrice.innerHTML = this.value;
        }
        // nice scroll
    $("html").niceScroll({
        cursorcolor: "#ffa500",
        cursorwidth: "10px"
    });
})