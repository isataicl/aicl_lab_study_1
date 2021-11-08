input.onButtonPressed(Button.A, function () {
    if (gatorEnvironment.getMeasurement(measurementType.eCO2) < 400) {
        strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    } else {
        strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.AB, function () {
    if (gatorSoil.moisture(AnalogPin.P0, GatorSoilType.Moisture, DigitalPin.P1) < 0.3) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showNumber(Math.round(gatorSoil.moisture(AnalogPin.P0, GatorSoilType.Moisture, DigitalPin.P1)))
    } else {
        strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
input.onButtonPressed(Button.B, function () {
    if (gatorEnvironment.getMeasurement(measurementType.degreesF) < 65 || gatorEnvironment.getMeasurement(measurementType.degreesF) > 75) {
        strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.showNumber(Math.round(gatorEnvironment.getMeasurement(measurementType.degreesF)))
    } else {
        strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(2000)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
let strip: neopixel.Strip = null
gatorEnvironment.beginEnvironment()
basic.forever(function () {
	
})
