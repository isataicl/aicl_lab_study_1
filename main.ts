input.onButtonPressed(Button.A, function () {
    basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
    if (75 < gatorEnvironment.getMeasurement(measurementType.degreesF)) {
        basic.showIcon(IconNames.Sad)
    } else if (gatorEnvironment.getMeasurement(measurementType.degreesF) < 65) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.AB, function () {
    let x = 0
    basic.showNumber(Math.round(gatorSoil.moisture(AnalogPin.P0, GatorSoilType.Moisture, DigitalPin.P1)))
    if (0.3 > x) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(gatorEnvironment.getMeasurement(measurementType.eCO2))
    strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(5000)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
let strip: neopixel.Strip = null
gatorEnvironment.beginEnvironment()
