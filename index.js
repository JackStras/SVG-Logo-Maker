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

function makeLogo(data) {
    let shape
    let logoText = ``
    if (data.shapeInput == "Triangle") {
        shape = new Triangle()
        logoText = `<text x="109" y="135" font-size="45" fill="${data.textColor}">${data.textInput}</text>`
    } else if (data.shapeInput == "Square") {
        shape = new Square()
        logoText = `<text x="109" y="115" font-size="45" fill="${data.textColor}">${data.textInput}</text>`
    } else {
        shape = new Circle()
        logoText = `<text x="109" y="115" font-size="45" fill="${data.textColor}">${data.textInput}</text>`
    }

    shape.setColor(data.shapeColor)
    const logoShape = shape.render()
    
    
    const finishedLogo = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${logoShape}
      ${logoText}
    </svg>
    `

    fs.writeFile("logo.svg", finishedLogo, (error) => error ? console.error(error) : console.log("Generated logo.svg"))
}

function init() {
    inquirer.prompt(prompts).then((data) => makeLogo(data))
}

init()