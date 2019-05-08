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
	 off=0x00,
	 low=0x02,
	 mid=0x1F,
	 high=0x7F,
	 max=0xFF,  
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
	//% blockId="gatorParticle_settings"
	//% block="Change brightness of %ledToRead | to %ledBrightness"
	export function settings(ledType: ledToRead, brightness: ledBrightness): void{
		switch(ledType){
			case ledToRead.red: setRedAmplitude(brightness)
			case ledToRead.infrared: setInfraredAmplitude(brightness)
		}
	}
	
	/**
	* Functions used for simulator, actual implementations are in gatorparticle.cpp
	*/
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

	//% shim=gatorParticle::setRedAmplitude
	function setRedAmplitude(brightness: number)
	{
		return 0
	}
	
	//% shim=gatorParticle::setInfraredAmplitude
	function setInfraredAmplitude(brightness: number)
	{
		return 0
	}
}