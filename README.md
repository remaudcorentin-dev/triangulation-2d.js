# triangulation-2d.js
JavaScript code snippet to triangulate the intersection of 3 circles (determinate the epicenter of an earthquake).


Usage :

```javascript

var A = [100, 100, 50];
var B = [160, 120, 36];
var C = [70, 150, 60];

/* Calculate the source of these three emissions - should be approximatly [130, 140]  */

console.log( triangulation_2d(A, B, C) );

```
  
  
Does the following math:
  
```python
  
# From three circles a(X, Y, I), b(X, Y, I) & c(X, Y, I) where X & Y is the center of the circle in cartesian coordonates and I the radius of the circle (= the intensity of the received signal) :

# Express a, b & c to the following equation (x & y are variable while X & Y are the circle center coordonates) :
  a: x**2 - 2 * aX * x + aX**2 + y**2 - 2 * aY * y + aY**2 = aI**2
  b: x**2 - 2 * bX * x + bX**2 + y**2 - 2 * bY * y + bY**2 = bI**2
  c: x**2 - 2 * cX * x + cX**2 + y**2 - 2 * cY * y + cY**2 = cI**2

# Then we can solve a-b = b-c :

= a-b
= x**2 - 2 * aX * x + aX**2 + y**2 - 2 * aY * y + aY**2 - aI**2 - x**2 - 2 * bX * x + bX**2 + y**2 - 2 * bY * y + bY**2 - bI**2
= - 2 * aX * x + aX**2 - 2 * aY * y + aY**2 - aI**2 - 2 * bX * x + bX**2 - 2 * bY * y + bY**2 - bI**2
# then
y1 = (-2 * bX - 2 * aX) / (2 * By - 2 * aY) * x + (bX**2 + bY**2 + bI**2) / (aX**2 + aY**2 + aI**2)

= b-c
= x**2 - 2 * bX * x + bX**2 + y**2 - 2 * bY * y + bY**2 - bI**2 - x**2 - 2 * cX * x + cX**2 + y**2 - 2 * cY * y + cY**2 - cI**2
= - 2 * bX * x + bX**2 - 2 * bY * y + bY**2 - bI**2 - 2 * cX * x + cX**2 - 2 * cY * y + cY**2 - cI**2
# then
y2 = (-2 * cX - 2 * bX) / (2 * cy - 2 * bY) * x + (cX**2 + cY**2 + cI**2) / (bX**2 + bY**2 + bI**2)

# So we deduce the final X & Y variables :
(FinalX) = ( (bX**2 + bY**2 + bI**2) / (aX**2 + aY**2 + aI**2) - (cX**2 + cY**2 + cI**2) / (bX**2 + bY**2 + bI**2) ) / ( (-2 * cX - 2 * bX) / (2 * cy - 2 * bY) * x - (-2 * bX - 2 * aX) / (2 * By - 2 * aY) )
(FinalY) = (-2 * cX - 2 * bX) / (2 * cy - 2 * bY) * (FinalX) + (cX**2 + cY**2 + cI**2) / (bX**2 + bY**2 + bI**2)

# I need to check it one more time to be sure, but it seems correct to me

```
