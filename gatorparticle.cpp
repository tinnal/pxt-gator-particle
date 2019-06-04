/**
* Andy England @ SparkFun Electronics
* June 4, 2019
* https://github.com/sparkfun/pxt-gator-particle
*
* Development environment specifics:
* Written in Microsoft PXT
* Tested with a SparkFun Gator:Particle Sensor
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


#include "pxt.h"
#include <cstdint>
#include "MAX30105.h"

using namespace pxt;

namespace gatorParticle {
	//MicroBitI2C i2c(I2C_SDA0, I2C_SCL0);
	MAX30105 *particleSensor;
	
	/*
	* Initializes the particle sensor
	*/
	//%
	void begin()
	{
		particleSensor->begin();
		particleSensor->setup();
	}
	
	/*
	* Returns the red value
	*/
	//%
	uint32_t getRedValue()
	{
		return particleSensor->getRed();
	}
	
	/*
	* Returns the infrared value
	*/
	//%
	uint32_t getInfraredValue()
	{
		return particleSensor->getIR();
	}
	
	/*
	*Sets Red or Red and IR LEDs to active
	*/
	//%
	void setMode(uint8_t mode)
	{
		particleSensor->setLEDMode(mode);
	}
	
	/*
	*Sets Red or IR LED amplitude
	*/
	//%
	void setAmplitude(uint8_t led, uint8_t myBrightness)
	{
		switch(myBrightness)
		{
			case 1:
				myBrightness = 0;
				break;
			case 2:
				myBrightness = 2;
				break;
			case 3:
				myBrightness = 31;
				break;
			case 4:
				myBrightness = 127;
				break;
			case 5:
				myBrightness = 255;
				break;
		}
		switch(led)
		{
			case 1:
				particleSensor->setPulseAmplitudeRed(myBrightness);
				break;
			case 2:
				particleSensor->setPulseAmplitudeIR(myBrightness);
				break;
		}
	}
}