enum RadioMessage {
    message1 = 49434
}
function alarma () {
    basic.showIcon(IconNames.Skull)
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 200), music.PlaybackMode.LoopingInBackground)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
}
radio.onReceivedNumber(function (receivedNumber) {
    alarma()
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("ayuda")
    alarma()
})
radio.setGroup(1)
