const inquirer = require("inquirer")
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt")
const fs = require("fs")
inquirer.registerPrompt("maxlength-input", maxLengthInputPrompt)
const {Triangle, Square, Circle} = require("./lib/shapes")

const prompts = [
    {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color for the logo. You may use hexadecimal number."
    },
    {
        type: "input",
        name: "textColor",
        message: "Please enter a color for the text. You may use hexadecimal number."
    },
    {
        type: "list",
        name: "shapeInput",
        message: "Please select a shape.",
        choices: ["Triangle", "Square", "Circle"]
    },
    {
        type: "maxlength-input",
        name: "textInput",
        message: "Select up to 3 characters for your logo.",
        maxLength: 3
    }
]

function makeLogo(file, data) {
    if (data.shapeInput == "Triangle") {
        const shape = new Triangle()
        const logoText = `<text x="109" y="135" font-size="45" fill="${data.textColor}">${data.textInput}</text>`
    } else if (data.shapeInput == "Square") {
        const shape = new Square()
        const logoText = `<text x="109" y="115" font-size="45" fill="${data.textColor}">${data.textInput}</text>`
    } else {
        const shape = new Circle()
        const logoText = `<text x="109" y="115" font-size="45" fill="${data.textColor}">${data.textInput}</text>`
    }


}