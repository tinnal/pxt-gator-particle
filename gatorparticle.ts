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
};
 
enum heartbeatType{
	BPM=0,
	AVG=1,
};

enum ledMode{
	red=2,
	red_and_IR=3,
};
 
//% color=#f44242 icon="\uf004"
namespace gatorParticle {
    // Functions for reading Particle from the gatorParticle in Particle or straight adv value
	
	/**
	* Initializes the gator:particle sensor, must be called on power up
	*/	
	//% weight=30 
	//% blockId="gatorParticle_begin" 
	//% block="Initialize gator:Particle sensor"
	//% shim=gatorParticle::begin
	export function begin(){
		return
	}
		
	/**
	* Reads either the Red or Infrared detection channels
	*/
	//% weight=29 
	//% blockId="gatorParticle_color" 
	//% block="Get %ledToRead value"
	//% shim=gatorParticle::color
	export function color(type: ledToRead): number{
		return 0
	}
	
	/**
	* Set which LED's we want the sensor to update and read.
	*/	
	//% weight=28
	//% blockId="gatorParticle_setReadMode"
	//% block="Set LED mode to read %ledMode"
	//% shim=gatorParticle::setReadMode
	//% advanced=true
	export function setReadMode(mode: ledMode)
	{
		return
	}

	/**
	* Set the amplitude of either Red or Infrared LED
	*/	
	//% weight=27
	//% blockId="gatorParticle_setAmplitude"
	//% block="Change strength of %ledToRead | to %myBrightness"
	//% shim=gatorParticle::setAmplitude
	//% advanced=true
	export function setAmplitude(led: ledToRead, myBrightness: number)
	{
		return
	}
	
	/**
	* Grab the heartbeat from the sensor in either beats per minute, or an average of the last 4 BPM readings.
	*/
	//% weight=26
	//% blockId="gatorParticle_heartbeat"
	//% block="Detect heartbeat in %heartbeatType"
	//% shim=gatorParticle::heartbeat
	export function heartbeat(type: heartbeatType): number
	{
		return 0
	}
}