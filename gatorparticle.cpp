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
	

	//%
	void begin()
	{
		particleSensor->begin();
		particleSensor->setup();
	}
	
	uint32_t color(uint8_t type)
	{
		switch(type)
		{
			case 1:
				particleSensor->getRed();
				break;
			case 2:
				particleSensor->getIR();
				break;
		}
	}


	//%
	void setReadMode(uint8_t mode)
	{
		particleSensor->setLEDMode(mode);
	}


	//%
	void setAmplitude(uint8_t led, uint8_t myBrightness)
	{
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

	uint8_t heartbeat(uint8_t type)
	{
	  return particleSensor->getHeartbeat(type);
	}
}