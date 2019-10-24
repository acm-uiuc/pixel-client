import requests

# Draws a pixel with `color` at (x, y)
def draw_pixel(x, y, color):
    requests.post('http://pixel.acm.illinois.edu', data={'x': str(x), 'y': str(y), 'color': color})

# Draws a red (#FF0000) square.
# Top left corner: (x1, y1)
# Bottom right corner: (x2, y2)
def draw_red_square(x1, y1, x2, y2):
    for x in range(x1, x2):
        for y in range(y1, y2):
            draw_pixel(x, y, "#FF0000")

# Draw a red square from (0, 0) to (10, 10)
draw_red_square(0,0,10,10)
