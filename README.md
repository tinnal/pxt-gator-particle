# gator:particle Light Sensor

[![Community Discord](https://img.shields.io/discord/448979533891371018.svg)](https://aka.ms/makecodecommunity)

The gator:particle, which includes the MAX30102 particle sensor can be purchased [here.](https://www.sparkfun.com/products/15271)
The gator:particle contains a MAX30102 particle sensor, which is mainly used for measuring heartrate.

![SparkFun gator:particle](https://raw.githubusercontent.com/sparkfun/pxt-gator-particle/master/icon.png)  

## ~ hint

To use this package, go to https://makecode.microbit.org, click ``Add package`` and search for **gator-particle**. The package is located [here](https://makecode.microbit.org/pkg/sparkfun/pxt-gator-particle)

## ~

## Basic usage

```blocks
//Initializes the gator:particle so we can use it
gatorParticle.begin()
```

Use ``||Initialize gator:particle sensor||`` to start the gator:particle up so we can read from it.

```blocks
//Reads a value from the Red or Infrared LED
gatorParticle.color(ledToRead.red)
```

Use ``||Get red value||`` to get the value from the red channel. Grabbing the infrared channel is as easy as using the dropdown to call ``||Get infrared value||``

```blocks
//Reads the heartbeat of a finger pressed to the sensor in BPM or as a running average of 4 BPM readings.
gatorParticle.heartbeat(heartbeatType.BPM)
```

Use ``||Get heartbeat in BPM||`` to get the heartbeat of finger on the sensor in BPM. Grabbing the average BPM is as easy as using the dropdown to call ``||Get heartbeat in AVG||``

## Example: Red Detector

```blocks
//Read red value and write it to the micro:bit screen as a bar graph.
gatorParticle.begin()
basic.forever(function () {
    led.plotBarGraph(
    gatorParticle.color(ledToRead.red),
    65000
    )
})
```

## Supported targets

* for PXT/microbit

## License

MIT

```package
gatorParticle=github:sparkfun/pxt-gator-particle
```