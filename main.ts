let number = 0
function increase () {
    number += 1
    basic.showNumber(number)
}
function decrease () {
    number += -1
    basic.showNumber(number)
}
input.onButtonPressed(Button.A, function () {
    decrease()
})
input.onButtonPressed(Button.AB, function () {
    CountDown()
    basic.showNumber(number)
})
input.onButtonPressed(Button.B, function () {
    increase()
})
function CountDown () {
    for (let index = 0; index <= number; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(number - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO")
}
