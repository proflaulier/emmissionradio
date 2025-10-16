input.onButtonPressed(Button.A, function () {
    radio.sendValue("numCube", 4)
    basic.showIcon(IconNames.QuarterNote)
    basic.pause(1000)
    basic.showIcon(IconNames.EighthNote)
})
basic.showIcon(IconNames.QuarterNote)
radio.setGroup(7)
