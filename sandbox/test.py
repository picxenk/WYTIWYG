#!/usr/bin/python

from Adafruit_Thermal import *

printer = Adafruit_Thermal("/dev/ttyAMA0", 9600, timeout=5)




printer.justify('C')
# Print the 135x135 pixel QR code in adaqrcode.py
import gfx.adaqrcode as adaqrcode
printer.printBitmap(adaqrcode.width, adaqrcode.height, adaqrcode.data)
printer.sleep()      # Tell printer to sleep
printer.wake()       # Call wake() before printing again, even if reset
printer.setDefault() # Restore printer to defaults
