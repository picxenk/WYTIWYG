import sys
from Adafruit_Thermal import *
from PIL import Image, ImageDraw

printer = Adafruit_Thermal("/dev/ttyAMA0", 9600, timeout=5)

paperHeight = 384
cell = 20
margin = (paperHeight - (cell * 6)) / 2 # 102

def main():
    if len(sys.argv) != 3:
        print("Usage: python printFontLine.py FONTSIZE '010101'")
        sys.exit(1)

    global cell, margin
    cell = int(sys.argv[1])
    margin = (paperHeight - (cell * 6)) / 2

    fontLine = list(sys.argv[2])
    if len(fontLine) != 6:
        print("FontLine should be 6 numbers")
        sys.exit(1)

    printFontLine(fontLine)


def printFontLine(data):
    bg = Image.new("1", [paperHeight, cell], "white")
    draw = ImageDraw.Draw(bg)
    i = 0
    for bit in data:
        if (bit == 1 or bit == '1'):
            sx = margin+cell*i
            sy = 0
            ex = sx+cell
            ey = sy+cell
            shape = [(sx, sy), (ex, ey)]
            draw.rectangle(shape, fill="black")    
        i = i + 1
    printer.printImage(bg, True)


if __name__ == '__main__':
  main()
