let Distance = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P8, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P8, 0)
    Distance = Math.idiv(pins.pulseIn(DigitalPin.P16, PulseValue.High), 58)
    basic.showNumber(Distance)
    basic.pause(100)
})
