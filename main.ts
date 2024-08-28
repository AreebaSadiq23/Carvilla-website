interface Car {
  image: string;
  title: string;
  description: string;
}

const cars: Car[] = [
  {
    image: "images/9.png",
    title: "BMW Series-3 Wagon",
    description: `Duis aute irure in repherendit in volupate velit esse<br>
                      cillum dolore eu fugiat nulla pariture. Sint accetcate<br>
                      cupitades not prodient, sunt in culpa qui officia est<br> 
                      deserant molit anim id est laborem sed ut pers unde <br>
                      omins ist e nature error sits volupatatme accucasant.<br>

                      Duis aute irure in repherendit in volupate velit esse <br>
                     cillum dolore eu  fugiat nulla pariture. Sint accetcate<br>
                    cupitades not prodient,sunts in culpa  qui officia is an <br>
                   deserant molit anim id est laborem sed ut pers unde <br>
                   omins iste nature error sits volupatatme accucasant.`,
  },
  {
    image: "images/15.png",
    title: "BMW xseries-6",
    description: `Duis aute irure in repherendit in volupate velit esse<br>
        cillum dolore eu fugiat nulla pariture. Sint accetcate<br>
        cupitades not prodient, sunt in culpa qui officia est<br> 
        deserant molit anim id est laborem sed ut pers unde <br>
        omins ist e nature error sits volupatatme accucasant.<br>

        Duis aute irure in repherendit in volupate velit esse <br>
       cillum dolore eu  fugiat nulla pariture. Sint accetcate<br>
      cupitades not prodient,sunts in culpa  qui officia is an <br>
     deserant molit anim id est laborem sed ut pers unde <br>
     omins iste nature error sits volupatatme accucasant.`,
  },
  {
    image: "images/16.png",
    title: "Audi A4 Sedan",
    description: `Duis aute irure in repherendit in volupate velit esse<br>
                      cillum dolore eu fugiat nulla pariture. Sint accetcate<br>
                      cupitades not prodient, sunt in culpa qui officia est<br> 
                      deserant molit anim id est laborem sed ut pers unde <br>
                      omins ist e nature error sits volupatatme accucasant.<br>

                      Duis aute irure in repherendit in volupate velit esse <br>
                     cillum dolore eu  fugiat nulla pariture. Sint accetcate<br>
                    cupitades not prodient,sunts in culpa  qui officia is an <br>
                   deserant molit anim id est laborem sed ut pers unde <br>
                   omins iste nature error sits volupatatme accucasant.`,
  },
  // Add more car objects as needed
];

let currentCarIndex = 0;

function updateCar() {
  const car = cars[currentCarIndex];
  const carImage = document.getElementById("carImage") as HTMLImageElement;
  const carTitle = document.getElementById("carTitle") as HTMLHeadingElement;
  const carDescription = document.getElementById(
    "carDescription"
  ) as HTMLParagraphElement;

  carImage.src = car.image;
  carTitle.textContent = car.title;
  carDescription.innerHTML = car.description;

  currentCarIndex = (currentCarIndex + 1) % cars.length;
}

// Call updateCar function every 5 seconds to switch the content
setInterval(updateCar, 4000);
