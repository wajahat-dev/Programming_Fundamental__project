function area() {
    var length, width, Area;
    diagonal = document.getElementById("diagonal ").value;

    // Area = Diagonal²/2
    Area = Math.sqrt(diagonal) / 2;
    document.getElementById("result ").value = Area;
    console.log('area')
}



function ratioAspect() {
    var length, width, AspectRatio;
    diagonal = document.getElementById("diagonal11 ").value;
    length = document.getElementById("lenght11 ").value;

    // lenght = diagonal / √(AR² + 1)
    // AR = (√ diagonal² - length²) / length
    AspectRatio = Math.sqrt(Math.pow(diagonal, 2) - Math.pow(length, 2)) / length;
    document.getElementById("result11 ").value = AspectRatio;
    console.log('ratioAspect')
}