input.onButtonPressed(Button.A, function () {
    while (venados > 0) {
        aleatorio = randint(1, 100)
        if (aleatorio >= 1 && aleatorio <= 18) {
            venados += 1
            year += 1
            basic.showString("V:" + venados + "A:" + year)
        } else if (aleatorio > 18 && aleatorio <= 58) {
            venados += -1
            year += 1
            basic.showString("V:" + venados + "A:" + year)
        } else if (aleatorio > 58 && aleatorio <= 75) {
            venados += -1
            year += 1
            basic.showString("V:" + venados + "A:" + year)
        } else if (aleatorio > 75 && aleatorio <= 100) {
            venados += 0
            year += 1
            basic.showString("V:" + venados + "A:" + year)
        }
    }
    basic.showString("Años:" + "tras ext." + year)
})
let aleatorio = 0
let year = 0
let venados = 0
venados = 200
year = 0
basic.forever(function () {
	
})
