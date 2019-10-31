from Adafruit_Thermal import *
from PIL import Image, ImageDraw

printer = Adafruit_Thermal("/dev/ttyAMA0", 9600, timeout=5)
bg      = Image.new("1", [384, 30], "white") # Working 'background' image
# img     = Image.open('char_template_test.png')        # Source bitmaps
draw = ImageDraw.Draw(bg)

def printChar(char):
    shape = [(102, 0), (102+30, 30)]
    draw.rectangle(shape, fill="black")    

    shape = [(102+(30*5), 0), (102+150+30, 30)]
    draw.rectangle(shape, fill="black")    
  # bg.paste(img, (91, 0)) # Numbers are cropped off right side
  # for row in xrange(9):
  #   for col in xrange(9):
  #     n = board[posfor(row, col)]
  #     if n is not None:
  #       bg.paste(numbers[n], (xcoord[col], ycoord[row]))

paperHeight = 384
cell = 20
margin = (paperHeight - (cell * 6)) / 2 # 102

def printFontLine(data):
    bg = Image.new("1", [paperHeight, cell], "white")
    draw = ImageDraw.Draw(bg)
    i = 0
    for bit in data:
        if (bit == 1):
            sx = margin+cell*i
            sy = 0
            ex = sx+cell
            ey = sy+cell
            shape = [(sx, sy), (ex, ey)]
            draw.rectangle(shape, fill="black")    
        i = i + 1
    printer.printImage(bg, True)

# printChar('a')
printFontLine([0, 1, 1, 1, 1, 1])
printFontLine([1, 0, 0, 0, 0, 0])
printFontLine([0, 1, 1, 0, 0, 0])
printFontLine([1, 0, 0, 0, 0, 0])
printFontLine([0, 1, 1, 1, 1, 1])

printFontLine([0, 0, 0, 0, 0, 0])

# printFontLine([1, 1, 1, 1, 1, 1])
# printFontLine([1, 0, 0, 1, 0, 1])
# printFontLine([1, 0, 0, 1, 0, 1])
# printFontLine([1, 0, 0, 1, 0, 1])
#
# printFontLine([0, 0, 0, 0, 0, 0])
# printer.printImage(bg, True)
