import sys
from Adafruit_Thermal import *
from PIL import Image, ImageDraw

printer = Adafruit_Thermal("/dev/ttyAMA0", 9600, timeout=5)

feedSize = 1;

def main():
    if len(sys.argv) != 2:
        print("Usage: python printFeed.py FEEDSIZE")
        sys.exit(1)

    global feedSize;
    feedSize = int(sys.argv[1])
    printer.feed(feedSize);




if __name__ == '__main__':
  main()
