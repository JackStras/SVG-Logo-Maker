const {Triangle, Square, Circle} = require("./shapes")

describe("Test for triangle", () => {
    it("should produce the proper svg code for a triangle class with a blue color", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe("Test for square", () => {
    it("should produce the proper svg code for a square class with a red color", () => {
        const shape = new Square()
        shape.setColor("red")
        expect(shape.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="red" />`)
    })
})

describe("Test for circle", () => {
    it("should produce the proper svg code for a circle class with a yellow color", () => {
        const shape = new Circle()
        shape.setColor("yellow")
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="75" fill="yellow" />`)
    })
})