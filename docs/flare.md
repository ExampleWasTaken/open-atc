# FLARE
Flare is a render engine based on the HTML canvas element.  
This document aims to provide documentation of the structure of the code base.

## General classes
### `Flare`
This is the main class of flare. 

### `Viewport`
The viewport class manages the display of the rendered content inside the area that is visible to the user. If the rendered
content is draggable (like a map) it also manages the dragging behavior.

### `Canvas`
This class manages the actual canvas. It has methods for adding and removing stuff to and from the canvas and clearing the
canvas altogether.

### `Vector2D`/`Vector3D`
Vectors are used to describe positions on the canvas. The only difference between 2D and 3D vector is the dimensionality.
```
X = horizontal axis
Y = vertical axis
Z = depth (like z-index)
```


## Canvas elements
Canvas elements are what is shown on the canvas, meaning they are used to display content on the canvas.

### `Rectangle`
A rectangle is a primitive canvas element that describes the shape of a rectangle on the canvas. It is defined
by a location (see [General concepts > Location](#location)) and a height and width.

### `Circle`
A circle is a primitive canvas element that describes the shape of a circle on the canvas. It is defined by a
location (see [General concepts > Location](#location)) and a radius.

### `Textbox`
A text box is an advanced canvas element that consists of a rectangle that can hold an arbitrary text value.


## General concepts
### Location
Any point on the canvas can be described by a location. A location is described by a [Vector2D](#vector2dvector3d).

## Positioning
Elements on the canvas are positioned using [locations](#location).
- Rectangular shapes are defined based on their top left point. (The canvas is always a rectangle therefore this can be extrapolated
onto the canvas itself.)
- Circular shapes are positioned using their center location.
