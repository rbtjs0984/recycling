input.onButtonPressed(Button.B, function () {
    music.setVolume(10)
    aicococam.request()
    if (aicococam.readBox_s(Content3.ID) == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("paper")
    }
    if (aicococam.readBox_s(Content3.ID) == 2) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showString("glass")
    }
    if (aicococam.readBox_s(Content3.ID) == 3) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showString("plastic")
    }
    if (aicococam.readBox_s(Content3.ID) == 4) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showString("can")
    }
})
aicococam.initI2c()
aicococam.initMode(protocolAlgorithm.ALGORITHM_OBJECT_CLASSIFICATION)
