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

 enum gatorParticleType{
	 red=1,
	 infrared=2,
	 green=3,
 } 
 
 enum gatorDetectionType{
	 heartbeat=1,
	 presence=2,
	 smoke=3,
 }

//% color=#f44242 icon="\uf185"
namespace gatorParticle {
	let highAddress = 0x39
    let lowAddress = 0x38
    let araAddress = 0x0C
	let commandRegister = 0x06
    // Functions for reading Particle from the gatorParticle in Particle or straight adv value
	
    //% weight=31 blockId="gatorParticle_begin" block="Initialize gator:Particle sensor"
	export function begin() 
	{
		commandRegister = 0x06
	}
    /**
    * Reads the number
    */
    //% weight=30 blockId="gatorParticle_color" block="Get %gatorParticleType value"
    export function color(type: gatorParticleRefreshTime): number{
    }

    //% weight=29 blockId="gatorParticle_detect" block="Detect %gatorDetectionType"
    export function detect(): boolean{
	}
}