# SVG Logo Maker

## Description
This is a Node.js command-line application that prompts the user to select a logo color and shape, provide text for the logo, and then saves the generated SVG to a .svg file.

## User Story
AS a freelance web developer  
I WANT to generate a simple logo for my projects  
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input  
WHEN I am prompted for text, THEN I can enter up to three characters.  
WHEN I am prompted for the text color, THEN I can enter a color keyword (OR a hexadecimal number).  
WHEN I am prompted for a shape, THEN I am presented with a list of shapes to choose from: circle, triangle, and square.  
WHEN I am prompted for the shape's color, THEN I can enter a color keyword (OR a hexadecimal number).  
WHEN I have entered input for all the prompts, THEN an SVG file is created named `logo.svg` AND the output text "Generated logo.svg" is printed in the command line. 
WHEN I open the `logo.svg` file in a browser, THEN I am shown a 300x200 pixel image that matches the criteria I entered.  

## Installation
Install Node.js, if needed.     

Create a .gitignore file and include "node_modules", ".vscode", and "package-lock.json" in it, so that these files aren't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.     

Make sure that your repo includes a package.json with the required dependencies. You can create one by running "npm init" when you first set up the project, before installing any dependencies.     

This application requires the Inquirer.js module. To install inquirer, navigate to your terminal and enter "npm i inquirer@8.2.4".    

This application requires the Jest.js module. To install jest, navigate to your terminal and enter "npm i --save-dev jest".    

## Usage
Right-click on the "index.js" file and select "Open in Integrated Terminal". To initiate application, type "node index.js" and press enter. Complete the prompts to generate a README.md file.

## The following video demonstrates the application's functionality
![Demonstration of node.js application that prompts user to enter up to three characters, the text color, the shape, and the shape color and then generates an SVG logo.](https://github.com/Meowlory3579/svg-logo-maker/blob/main/assets/svg-logo-maker.gif)

Demonstration with Jest test functionality can be found here: https://drive.google.com/file/d/19_Y7be4CQx6Hok2ruQ7uvaXdaR_HZaiA/view?usp=sharing

## Credits
https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes | https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts | https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute | ChatGPT helped me write the input validations in the index.js file