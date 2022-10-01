/**
 * Python code
 */
basic.showIcon(IconNames.TShirt)
pins.analogSetPitchPin(AnalogPin.P2)
let d = 1000
let SA = 256
let RE = SA * (9 / 8)
let GA = RE * (10 / 9)
let MA = GA * (16 / 15)
let PA = MA * (9 / 8)
let DHA = PA * (10 / 9)
let NI = DHA * (9 / 8)
let SA2 = NI * (16 / 15)
basic.pause(50)
basic.forever(function () {
    pins.analogPitch(SA, d)
    pins.analogPitch(RE, d)
    pins.analogPitch(GA, d)
    pins.analogPitch(MA, d)
    pins.analogPitch(PA, d)
    pins.analogPitch(DHA, d)
    pins.analogPitch(NI, d)
    pins.analogPitch(SA2, d)
    basic.pause(50)
    pins.analogPitch(SA2, d)
    pins.analogPitch(NI, d)
    pins.analogPitch(DHA, d)
    pins.analogPitch(PA, d)
    pins.analogPitch(MA, d)
    pins.analogPitch(GA, d)
    pins.analogPitch(RE, d)
    pins.analogPitch(SA, d)
})
