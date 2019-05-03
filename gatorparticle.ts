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
    // Functions for reading Particle from the gatorParticle in Particle or straight adv value
	
	//% weight=31 
	//% blockId="gatorParticle_begin" 
	//% block="Initialize gator:Particle sensor"
	//% shim=gatorParticle::begin
	export function begin(): boolean{
		return true;
	}
	
	/**
	* Reads the number
	*/
	//% weight=30 
	//% blockId="gatorParticle_color" 
	//% block="Get %gatorParticleType value"
	export function color(type: gatorParticleType): number{
		switch(type){
			case gatorParticleType.red: return getRedValue()
			case gatorParticleType.infrared: return getInfraredValue()
			case gatorParticleType.green: return getGreenValue()
		}
	}
	
	
	//% weight=29 
	//% blockId="gatorParticle_detect" 
	//% block="Detect %gatorDetectionType"
	export function detect(type: gatorParticleType): boolean{
		switch(type){
			case gatorParticleType.red: return true
			case gatorParticleType.infrared: return true
			case gatorParticleType.green: return true
		}
	}
	
	/**
	* Functions used for simulator, actual implementations are in gatorparticle.cpp
	*/
	//% shim=gatorParticle::getRedValue
	function getRedValue(): number{
		return getRedValue()
	}
	
	//% shim=gatorParticle::getInfraredValue
	function getInfraredValue(): number{
		return getInfraredValue()
	}
	
	//% shim=gatorParticle::getGreenValue
	function getGreenValue(): number{
		return getGreenValue()
	}
}