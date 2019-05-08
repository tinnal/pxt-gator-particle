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

 enum ledToRead{
	 red=1,
	 infrared=2,
 } 
 
 enum gatorDetectionType{
	 heartbeat=1,
	 presence=2,
	 smoke=3,
 }
 
  //Default is 0x1F which gets us 6.4mA
  //powerLevel = 0x02, 0.4mA - Presence detection of ~4 inch
  //powerLevel = 0x1F, 6.4mA - Presence detection of ~8 inch
  //powerLevel = 0x7F, 25.4mA - Presence detection of ~8 inch
  //powerLevel = 0xFF, 50.0mA - Presence detection of ~12 inch
 
 enum ledBrightness{
	 off=1,
	 low=2,
	 mid=3,
	 high=4,
	 max=5,  
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
	//% block="Get %ledToRead value"
	export function color(type: ledToRead): number{
		switch(type){
			case ledToRead.red: return getRedValue()
			case ledToRead.infrared: return getInfraredValue()
		}
	}
	
	//% weight=29 
	//% blockId="gatorParticle_detect" 
	//% block="Detect %gatorDetectionType"
	export function detect(type: ledToRead): boolean{
		switch(type){
			case ledToRead.red: return true
			case ledToRead.infrared: return true
		}
	}
	
	//% weight=28
	//% blockId="gatorParticle_amplitude"
	//% block="Change brightness of %ledToRead | to %ledBrightness"
	//% shim=gatorParticle::setAmplitude
	export function amplitude(type: ledToRead, brightness: ledBrightness){
		let myBrightness: number = 31
		switch(brightness){
			case ledBrightness.off: myBrightness = 0
			case ledBrightness.low: myBrightness = 2
			case ledBrightness.mid: myBrightness = 31
			case ledBrightness.high: myBrightness = 127
			case ledBrightness.max: myBrightness = 255
		}
		setAmplitude(type, myBrightness)
	}
	
	/**
	* Functions used for simulator, actual implementations are in gatorparticle.cpp
	*/
	
	//% shim=gatorParticle::setAmplitude
	function setAmplitude(led: number, myBrightness: number)
	{
		setAmplitude(led, myBrightness)
	}
	
	//% shim=gatorParticle::getRedValue
	function getRedValue()
	{
		return 0
	}
	
	//% shim=gatorParticle::getInfraredValue
	function getInfraredValue()
	{
		return 0
	}
}