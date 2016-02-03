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
//count the number of shapes
Square.prototype.countSquares = (function () {
    var squares = 0;
    return function () {return squares += 1;}
})();
//override - calculates the area of a square
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


//subclass Rectangle
function Rectangle(length, width)
{
    Shape.call(this);
    this.length = length;
    this.width = width;
}
//override
Rectangle.prototype.area = function() {return this.length * this.width;};

//subclass Triangle
function Triangle(base, height)
{
    Shape.call(this);
    this.base = base;
    this.height = height;
}
//override
Triangle.prototype.area = function() {return (this.base * this.height)/2;};

//subclass Circle
function Circle(radius)
{
    Shape.call(this);
    this.radius = radius;
}
//override
Circle.prototype.area = function() {return Math.PI*(Math.pow((this.radius), 2));};