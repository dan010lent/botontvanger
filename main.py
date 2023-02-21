def on_received_number_deprecated(receivedNumber):
    basic.clear_screen()
    if receivedNumber == 1:
        # Rechts
        led.plot(4, 2)
        maqueen.motor_run(maqueen.aMotors.M1, maqueen.Dir.CW, snelheidBocht)
        maqueen.motor_run(maqueen.aMotors.M2, maqueen.Dir.CCW, snelheidBocht)
    elif receivedNumber == 2:
        # Links
        led.plot(0, 2)
        maqueen.motor_run(maqueen.aMotors.M1, maqueen.Dir.CCW, snelheidBocht)
        maqueen.motor_run(maqueen.aMotors.M2, maqueen.Dir.CW, snelheidBocht)
    elif receivedNumber == 3:
        # Achteruit
        led.plot(2, 4)
        maqueen.motor_run(maqueen.aMotors.M1, maqueen.Dir.CCW, snelheidVoorAchter)
        maqueen.motor_run(maqueen.aMotors.M2, maqueen.Dir.CCW, snelheidVoorAchter)
    elif receivedNumber == 4:
        # Vooruit
        led.plot(2, 0)
        maqueen.motor_run(maqueen.aMotors.M1, maqueen.Dir.CW, snelheidVoorAchter)
        maqueen.motor_run(maqueen.aMotors.M2, maqueen.Dir.CW, snelheidVoorAchter)
    else:
        # Stop
        led.plot(2, 2)
        maqueen.motor_stop_all()
radio.on_received_number_deprecated(on_received_number_deprecated)

snelheidBocht = 0
snelheidVoorAchter = 0
radio.set_group(1)
snelheidVoorAchter = 100
snelheidBocht = 25