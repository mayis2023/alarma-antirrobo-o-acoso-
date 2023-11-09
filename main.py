def alarma():
    basic.show_icon(IconNames.SKULL)
    music.play(music.string_playable("C5 C5 C5 C5 C5 C5 C5 C5 ", 120),
        music.PlaybackMode.IN_BACKGROUND)
    music.ring_tone(262)

def on_gesture_shake():
    radio.send_string("ayuda")
    alarma()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

radio.set_group(1)