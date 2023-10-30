const inquirer = require("inquirer")
const maxLengthInputPrompt = require("inquirer-maxlength-input-prompt")
const fs = require("jest")
inquirer.registerPrompt('maxlength-input', maxLengthInputPrompt)