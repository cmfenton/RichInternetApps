//superclass
function Shape (){}
Shape.prototype.area = function(){ return "Shape Area";};

//subclass
function Square(size)
{
    Shape.call(this);
    this.size = size;
}
Square.prototype.add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

//override
Square.prototype.area = function() {return this.size * this.size;}

//subclass
function Rectangle(length, width)
{
    Shape.call(this);
    this.length = length;
    this.width = width;
}
//override
Rectangle.prototype.area = function() {return this.length * this.width;};

//subclass
function Triangle(base, height)
{
    Shape.call(this);
    this.base = base;
    this.height = height;
}
//override
Triangle.prototype.area = function() {return (this.base * this.height)/2;};

//subclass
function Circle(radius)
{
    Shape.call(this);
    this.radius = radius;
}
//override
Circle.prototype.area = function() {return Math.PI*(Math.pow((this.radius), 2));};

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

function addSquare()
{
    var square = document.getElementById("squareC");
    var mySquare = new Square(5);

    square.innerHTML = mySquare.add();
}