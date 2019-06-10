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
gatorParticle.setReadMode(ledMode.red_and_IR)
gatorParticle.setAmplitude(ledToRead.red, 255)
gatorParticle.setAmplitude(ledToRead.infrared, 255)
basic.forever(function () {
    serial.writeLine("" + gatorParticle.color(ledToRead.red))
    serial.writeLine("" + gatorParticle.color(ledToRead.infrared))
    serial.writeLine("" + gatorParticle.heartbeat(heartbeatType.BPM))
    serial.writeLine("" + gatorParticle.heartbeat(heartbeatType.AVG))
})