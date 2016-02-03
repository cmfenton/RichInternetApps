/////////////////////////
///Shape - Superclass///
///////////////////////

//
function Shape (){}
//to be overridden
Shape.prototype.area = function(){ return "Shape Area";};
//function that is called to count all shapes
var countTotal = (function () {
    var total = 0;
    return function () {return total += 1;}
})();

/////////////
///Square///
///////////

//constructor
function Square(size)
{
    Shape.call(this);
    this.size = size;
}
//count the number of squares
Square.prototype.countSquares = (function () {
    var squares = 0;
    return function () {return squares += 1;}
})();
//override of area calculation
Square.prototype.area = function() {return Math.pow(this.size, 2);};
//function that creates a square, increments counters, and updates the html
function addSquare()
{
    //get the html elements that need to be changed
    var squareCounter = document.getElementById("squareCount");
    var totalCounter = document.getElementById("totalCount");
    var squareArea = document.getElementById("square");
    var squareButton = document.getElementById("squareButton");

    //get the user input for size
    var sizeInput = document.getElementById("squareSize").value;

    //create a square with the size input
    var mySquare = new Square(sizeInput);

    //check how many squares there are now
    var numSquares = mySquare.countSquares();
    //if the number of squares is 10, disable the add square button
    if (numSquares == 10)
    {
        squareButton.disabled = true;
    }

    //update the html with new information
    squareCounter.innerHTML = "Square Count: " + numSquares;
    totalCounter.innerHTML = "Total Shapes: " + countTotal();
    squareArea.innerHTML += "</br>" + "Square #"+ numSquares +"<br/>";
    squareArea.innerHTML += "Size: " + mySquare.size + " x " + mySquare.size + "<br/>";
    squareArea.innerHTML += "Area: " + mySquare.area() + "<br/>";
}

////////////////
///Rectangle///
//////////////

//constructor
function Rectangle(length, width)
{
    Shape.call(this);
    this.length = length;
    this.width = width;
}
//count the number of rectangles
Rectangle.prototype.countRectangles = (function () {
    var rectangles = 0;
    return function () {return rectangles += 1;}
})();
//override of area calculation
Rectangle.prototype.area = function() {return this.length * this.width;};
//function that creates a rectangle, increments counters, and updates the html
function addRectangle()
{
    //get the html elements that need to be changed
    var rectangleCounter = document.getElementById("rectangleCount");
    var totalCounter = document.getElementById("totalCount");
    var rectangleArea = document.getElementById("rectangle");
    var rectangleButton = document.getElementById("rectangleButton");

    //get the user input for size
    var lengthInput = document.getElementById("rectangleLength").value;
    var widthInput = document.getElementById("rectangleWidth").value;

    //create a rectangle with the length and width input
    var myRectangle = new Rectangle(lengthInput, widthInput);

    //check how many rectangles there are now
    var numRectangles = myRectangle.countRectangles();
    //if the number of rectangles is 10, disable the add rectangle button
    if (numRectangles == 10)
    {
        rectangleButton.disabled = true;
    }

    //update the html with new information
    rectangleCounter.innerHTML = "Rectangle Count: " + numRectangles;
    totalCounter.innerHTML = "Total Shapes: " + countTotal();
    rectangleArea.innerHTML += "</br>" + "Rectangle #"+ numRectangles +"<br/>";
    rectangleArea.innerHTML += "Length: " + myRectangle.length+"<br/>";
    rectangleArea.innerHTML += "Width: "+  myRectangle.width+"<br/>";
    rectangleArea.innerHTML += "Area: " + myRectangle.area() + "<br/>";
}

///////////////
///Triangle///
/////////////

//constructor
function Triangle(base, height)
{
    Shape.call(this);
    this.base = base;
    this.height = height;
}
//override of area calculation
Triangle.prototype.area = function() {return (this.base * this.height)/2;};
//count the number of triangles
Triangle.prototype.countTriangles = (function () {
    var triangles = 0;
    return function () {return triangles += 1;}
})();
//function that creates a triangle, increments counters, and updates the html
function addTriangle()
{
    //get the html elements that need to be changed
    var triangleCounter = document.getElementById("triangleCount");
    var totalCounter = document.getElementById("totalCount");
    var triangleArea = document.getElementById("triangle");
    var triangleButton = document.getElementById("triangleButton");

    //get the user input for size
    var baseInput = document.getElementById("triangleBase").value;
    var heightInput = document.getElementById("triangleHeight").value;

    //create a triangle with the base and height input
    var myTriangle= new Triangle(baseInput, heightInput);

    //check how many triangles there are now
    var numTriangles = myTriangle.countTriangles();
    //if the number of squares is 10, disable the add triangle button
    if (numTriangles == 10)
    {
        triangleButton.disabled = true;
    }

    //update the html with new information
    triangleCounter.innerHTML = "Triangle Count: " + numTriangles;
    totalCounter.innerHTML = "Total Shapes: " + countTotal();
    triangleArea.innerHTML += "</br>" + "Triangle #"+ numTriangles +"<br/>";
    triangleArea.innerHTML += "Base: " + myTriangle.base+"<br/>";
    triangleArea.innerHTML += "Height: "+  myTriangle.height+"<br/>";
    triangleArea.innerHTML += "Area: " + myTriangle.area() + "<br/>";
}

/////////////
///Circle///
///////////

//constructor
function Circle(radius)
{
    Shape.call(this);
    this.radius = radius;
}
//override of area calculation
Circle.prototype.area = function() {return Math.PI*(Math.pow((this.radius), 2));};
//count the number of circles
Circle.prototype.countCircles = (function () {
    var circles = 0;
    return function () {return circles += 1;}
})();
//function that creates a triangle, increments counters, and updates the html
function addCircle()
{
    //get the html elements that need to be changed
    var circleCounter = document.getElementById("circleCount");
    var totalCounter = document.getElementById("totalCount");
    var circleArea = document.getElementById("circle");
    var circleButton= document.getElementById("circleButton");

    //get the user input for size
    var radiusInput = document.getElementById("circleRadius").value;

    //create a circle with the radius input
    var myCircle= new Circle(radiusInput);

    //check how many triangles there are now
    var numCircles= myCircle.countCircles();
    //if the number of squares is 10, disable the add circle button
    if (numCircles == 10)
    {
        circleButton.disabled = true;
    }

    //update the html with new information
    circleCounter.innerHTML = "Circle Count: " + numCircles;
    totalCounter.innerHTML = "Total Shapes: " + countTotal();
    circleArea.innerHTML += "</br>" + "Circle #"+ numCircles+"<br/>";
    circleArea.innerHTML += "Radius: "+  myCircle.radius+"<br/>";
    circleArea.innerHTML += "Area: " + myCircle.area() + "<br/>";
}