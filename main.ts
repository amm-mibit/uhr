input.onPinPressed(TouchPin.P0, function () {
    kitronik_halo_hd.setTime(0, 0, 0)
    kitronik_halo_hd.setDate(13, 2, 23)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    motions = 0
    basic.showNumber(motions)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.EighthNote)
})
input.onGesture(Gesture.Shake, function () {
    motions += 1
    basic.showNumber(motions)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Happy Birthday, Ammonas!")
})
let motions = 0
motions = 0
basic.showNumber(motions)
