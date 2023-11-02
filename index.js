const inquirer = require("inquirer")
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt")
const fs = require("fs")
inquirer.registerPrompt("maxlength-input", maxLengthInputPrompt)
const {Triangle, Square, Circle} = require("./lib/shapes")

const prompts = [
    {
        type: "input",
        name: "colorInput",
        message: "Please enter a color. You may use hexadecimal Number."
    },
    {
        type: "list",
        name: "shapeInput",
        message: "Please select a shape."
        choices: ["Triangle", "Square", "Circle"]
    },
    {
        type: "maxlength-input",
        name: "textInput",
        message: "Select up to 3 characters for your logo."
        maxLength: 3
    }
]