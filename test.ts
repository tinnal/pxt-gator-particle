/**
* Andy England @ SparkFun Electronics
* September 6, 2018

* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun gatorParticle sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the gatorParticle sensor
 */

gatorParticle.begin()
gatorParticle.setReadMode(LEDMode.RedAndIR)
gatorParticle.setAmplitude(LEDToRead.Red, 255)
gatorParticle.setAmplitude(LEDToRead.Infrared, 255)
basic.forever(function () {
    serial.writeLine("" + gatorParticle.color(LEDToRead.Red))
    serial.writeLine("" + gatorParticle.color(LEDToRead.Infrared))
    serial.writeLine("" + gatorParticle.heartbeat(HeartbeatType.BPM))
    serial.writeLine("" + gatorParticle.heartbeat(HeartbeatType.AVG))
})