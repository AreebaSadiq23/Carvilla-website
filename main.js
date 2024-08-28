var cars = [
    {
        image: 'images/9.png',
        title: 'BMW Series-3 Wagon',
        description: "Duis aute irure in repherendit in volupate velit esse<br>\n                      cillum dolore eu fugiat nulla pariture. Sint accetcate<br>\n                      cupitades not prodient, sunt in culpa qui officia est<br> \n                      deserant molit anim id est laborem sed ut pers unde <br>\n                      omins ist e nature error sits volupatatme accucasant.<br>\n\n                      Duis aute irure in repherendit in volupate velit esse <br>\n                     cillum dolore eu  fugiat nulla pariture. Sint accetcate<br>\n                    cupitades not prodient,sunts in culpa  qui officia is an <br>\n                   deserant molit anim id est laborem sed ut pers unde <br>\n                   omins iste nature error sits volupatatme accucasant."
    },
    {
        image: 'images/15.png',
        title: 'BMW xseries-6',
        description: "Duis aute irure in repherendit in volupate velit esse<br>\n        cillum dolore eu fugiat nulla pariture. Sint accetcate<br>\n        cupitades not prodient, sunt in culpa qui officia est<br> \n        deserant molit anim id est laborem sed ut pers unde <br>\n        omins ist e nature error sits volupatatme accucasant.<br>\n\n        Duis aute irure in repherendit in volupate velit esse <br>\n       cillum dolore eu  fugiat nulla pariture. Sint accetcate<br>\n      cupitades not prodient,sunts in culpa  qui officia is an <br>\n     deserant molit anim id est laborem sed ut pers unde <br>\n     omins iste nature error sits volupatatme accucasant."
    },
    {
        image: 'images/16.png',
        title: 'Audi A4 Sedan',
        description: "Duis aute irure in repherendit in volupate velit esse<br>\n                      cillum dolore eu fugiat nulla pariture. Sint accetcate<br>\n                      cupitades not prodient, sunt in culpa qui officia est<br> \n                      deserant molit anim id est laborem sed ut pers unde <br>\n                      omins ist e nature error sits volupatatme accucasant.<br>\n\n                      Duis aute irure in repherendit in volupate velit esse <br>\n                     cillum dolore eu  fugiat nulla pariture. Sint accetcate<br>\n                    cupitades not prodient,sunts in culpa  qui officia is an <br>\n                   deserant molit anim id est laborem sed ut pers unde <br>\n                   omins iste nature error sits volupatatme accucasant."
    }
    // Add more car objects as needed
];
var currentCarIndex = 0;
function updateCar() {
    var car = cars[currentCarIndex];
    var carImage = document.getElementById('carImage');
    var carTitle = document.getElementById('carTitle');
    var carDescription = document.getElementById('carDescription');
    carImage.src = car.image;
    carTitle.textContent = car.title;
    carDescription.innerHTML = car.description;
    currentCarIndex = (currentCarIndex + 1) % cars.length;
}
// Call updateCar function every 5 seconds to switch the content
setInterval(updateCar, 4000);

