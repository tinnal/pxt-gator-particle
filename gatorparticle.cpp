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
	const uint8_t RATE_SIZE = 4; //Increase this for more averaging. 4 is good.
	uint8_t rates[RATE_SIZE]; //Array of heart rates
	uint8_t rateSpot = 0;
	unsigned long lastBeat = 0; //Time at which the last beat occurred
	
	float beatsPerMinute = 20;
	int beatAvg;

	//%
	void begin()
	{
		particleSensor->begin();
		particleSensor->setup();
	}
	
	//%
	uint32_t color(uint8_t type)
	{
		uint32_t temp;
		switch(type)
		{
			case 1:
				temp = particleSensor->getRed();
				break;
			case 2:
				temp = particleSensor->getIR();
				break;
		}
		return temp;
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
	
	//%
	uint8_t heartbeat(uint8_t type)
	{
		MicroBit uBit;
		uBit.init();
	    int32_t irValue = particleSensor->getIR();
		bool heartbeat = particleSensor->checkForBeat(irValue);
		uint8_t temp;
		if (heartbeat == true)
		{
			//We sensed a beat!
			unsigned long delta = uBit.systemTime() - lastBeat;
			lastBeat = uBit.systemTime();

			beatsPerMinute = 60 / (delta / 1000.0);

			if (beatsPerMinute < 255 && beatsPerMinute > 20)
			{
				temp = 80;
				rates[rateSpot++] = (uint8_t)beatsPerMinute; //Store this reading in the array
				rateSpot %= RATE_SIZE; //Wrap variable

				//Take average of readings
				beatAvg = 0;
				for (uint8_t x = 0 ; x < RATE_SIZE ; x++){
					beatAvg += rates[x];
				}
				beatAvg /= RATE_SIZE;
			}
		}
		switch(type)
		{
			case 0:
				temp = (uint8_t)beatsPerMinute;
				break;
				
			case 1:
				temp = (uint8_t)beatAvg;
				break;
				
		}
		return temp;
	}
}