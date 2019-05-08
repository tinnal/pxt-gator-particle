/**
* Andy England @ SparkFun Electronics
* September 6, 2018
* https://github.com/sparkfun/pxt-light-bit
*
* Development environment specifics:
* Written in Microsoft PXT
* Tested with a SparkFun temt6000 sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


#include "pxt.h"
#include <cstdint>
#include <math.h>
#include "MAX30105.h"

using namespace pxt;

namespace gatorParticle {
	MicroBitI2C i2c(I2C_SDA0, I2C_SCL0);
	MAX30105 *particleSensor;
	
	/*
	* Initializes the particle sensor
	*/
	//%
	bool begin()
	{
		bool status = particleSensor->begin(i2c);
		particleSensor->setup();
		return status;
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
	* Sets the Red Amplitude
	*/
	//%
	void setRedAmplitude(uint8_t myBrightness)
	{
		particleSensor->setPulseAmplitudeRed(myBrightness);
	}
	
	/*
	* Sets the IR Amplitude
	*/
	//%
	void setInfraredAmplitude(uint8_t myBrightness)
	{
		particleSensor->setPulseAmplitudeIR(myBrightness);
	}
}