function TemperatureConverstion() {

    const rbs = document.querySelectorAll('input[name="optradio"]');
    let selectedValue;

    var value = document.getElementById("value ").value;

    // 0) farenhit
    // 1) kelvin

    var counter = 0;

    for (const rb of rbs) {
        switch (rb.checked) {
            case true:

                switch (counter) {
                    case 0:

                        var convertTofarenhist = (parseInt(value) * 9 / 5) + 32;
                        document.getElementById("conversion ").value = convertTofarenhist;
                        break;
                    case 1:

                        var convertTokelvin = parseInt(value) + 273.15;
                        document.getElementById("conversion ").value = convertTokelvin;
                        break;
                    default:

                        console.log("Error while conversing");
                }
                break;
            default:

                counter += 1;
        }
    }
}