radio.onReceivedNumberDeprecated(function (receivedNumber) {
    basic.clearScreen()
    if (receivedNumber == 1) {
        // Rechts
        led.plot(4, 2)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, snelheidBocht)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, snelheidBocht)
    } else if (receivedNumber == 2) {
        // Links
        led.plot(0, 2)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, snelheidBocht)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, snelheidBocht)
    } else if (receivedNumber == 3) {
        // Achteruit
        led.plot(2, 4)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, snelheidVoorAchter)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, snelheidVoorAchter)
    } else if (receivedNumber == 4) {
        // Vooruit
        led.plot(2, 0)
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, snelheidVoorAchter)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, snelheidVoorAchter)
    } else {
        // Stop
        led.plot(2, 2)
        maqueen.motorStopAll()
    }
})
let snelheidBocht = 0
let snelheidVoorAchter = 0
radio.setGroup(1)
snelheidVoorAchter = 100
snelheidBocht = 25
