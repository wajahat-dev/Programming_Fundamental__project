function pie_to_be_cal(n) {
    var length = 2;
    var side = 2;
    for (var i = 0; i < n; i++) {
        length = 2 - (2 * Math.sqrt((1 - length / 4)));
        side *= 2;
    }
    return (side * Math.sqrt(length));
}

function calculation() {


    var places = document.getElementById("specifiedPrecision ").value;

    old_result = null;
    for (var n = 0; n < 15 * places; n++) {
        result = pie_to_be_cal(parseInt(n).toPrecision(16));
        result += parseInt(result).toPrecision(8);
        document.getElementById("pieResult ").value = parseFloat(result).toFixed(places);
        console.log(result)
        if (result == old_result) {
            break;
        }
        old_result = result;
    }
}