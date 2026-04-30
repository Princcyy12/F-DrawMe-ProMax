class CanvasEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.shapes = [];
        this.selectedShape = null;
        this.drawingTool = null;
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    selectShape(shape) {
        this.selectedShape = shape;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let shape of this.shapes) {
            shape.draw(this.ctx);
        }
    }
}

class Shape {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx) {
        // To be implemented by specific shapes
    }
}

class Circle extends Shape {
    constructor(x, y, radius, color) {
        super(x, y, color);
        this.radius = radius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

class Rectangle extends Shape {
    constructor(x, y, width, height, color) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Additional shape classes and tools would be defined here...