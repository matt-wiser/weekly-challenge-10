const fs = require('fs');

const generateHTML = function(data) {
    const employeeCards = [];
    
    data.forEach(element => {
        if (element.getRole() === 'Manager') {
            const card = `<div class="col">
                            <div class="card">
                            <div class="card-body bg-primary">
                                <h5 class="card-title text-light">${element.getName()}</h5>
                                <img src="./img/people.svg" class="glyph"></img><h6 class="text-light">${element.getRole()}</h3>
                            </div>
                            <div class="card-footer">
                                <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Employee ID: ${element.getId()}</li>
                                        <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                                        <li class="list-group-item">Office Number: ${element.getOfficeNumber()}</li>
                                </ul>     
                            </div>
                            </div>
                        </div>`
            employeeCards.push(card);
        } else if (element.getRole() === 'Engineer'){
            const card = `<div class="col">
                            <div class="card">
                            <div class="card-body bg-primary">
                                <h5 class="card-title text-light">${element.getName()}</h5>
                                <img src="./img/desktop.svg" class="glyph"></img><h6 class="text-light">${element.getRole()}</h3>
                            </div>
                            <div class="card-footer">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Employee ID: ${element.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${element.getGithub()}">${element.getGithub()}</a></li>
                            </ul>     
                            </div>
                        </div>
                    </div>`
            employeeCards.push(card);
        } else {
            const card = `<div class="col">
                            <div class="card">
                            <div class="card-body bg-primary">
                                <h5 class="card-title text-light">${element.getName()}</h5>
                                <img src="./img/graduate.svg" class="glyph"></img><h6 class="text-light">${element.getRole()}</h3>
                            </div>
                            <div class="card-footer">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Employee ID: ${element.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></li>
                                <li class="list-group-item">School: ${element.getSchool()}</li>
                            </ul>     
                            </div>
                        </div>
                    </div>`
            employeeCards.push(card);
        }
    });

    generatePage(employeeCards);
}

function appendCards(array) {
    cardString = ''
    array.forEach(card => {
        cardString += card;
    });
    return cardString;
}

function generatePage(array) {
    const htmlString = `
    <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                <link href="./style.css" rel="stylesheet">
                <title>Team Roster</title>
            </head>
            <body>
                <nav class="bg-danger text-light"><h2>Team Roster</h2></nav>
                <div class="container">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        ${appendCards(array)}
                    </div>
                </div>
            </body>
        </html>
    `

    
    fs.writeFile('./dist/index.html', htmlString, (err) => {
        if (err) {
            console.log("FILE WRITE FAILED");
            console.log(err);
        }
        else{
            console.log("File Write Successful! Checkout the dist folder for your new page!");
        }
    })
}

module.exports = generateHTML;