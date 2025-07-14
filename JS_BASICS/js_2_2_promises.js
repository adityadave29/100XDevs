class Circle{
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }

    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    getCircumference(){
        return 2 * Math.PI * this.radius;
    }
}

const instance1 = new Circle(2,"red"); // instance of a circle class || object of a circle class.
const area = instance1.getArea();
console.log(area);


const now = new Date();
console.log(now);


const map = new Map();
map.set("name","John");
map.set("age",30);
console.log(map.get("name"));

//Promise class gives you a promise, that I will return you something in the future.
