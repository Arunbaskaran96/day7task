var xhr = new XMLHttpRequest();

xhr.open('GET','https://restcountries.com/v2/all',true);
xhr.send();
// xhr.responseType ="json";

xhr.onload = function(){

    var data = JSON.parse(xhr.response);//request from server
    


    //Get all the countries from the Asia continent /region using the Filter function
    var region1 = "Asia"
    var asiaregion = data.filter(n => n.region === region1)
                         .map((n)=> n.name)
    console.log(asiaregion);


    //Get all the countries with a population of less than 2 lakhs using Filter function


    var pop = data.filter(n => n.population < 200000)
                  .map((n)=> n.name)
    console.log(pop)


  




    //Print the total population of countries using reduce function

    var total = data.map((n)=> n.population)
                    .reduce((acc,sum)=> acc+sum)

    console.log("The total population ",total)



    //Print the country which uses US Dollars as currency.
   
      let usdCountries = data.filter((counnames) => {
        for (let i in counnames.currencies) {
          if (counnames.currencies[i].code === "USD") {
            return counnames;
          }
        }
      });
      console.log("Print the country which uses US Dollars as currency: ",usdCountries);
    }






// xhr.onload = function getdetails(){

//     var data1 = JSON.parse(xhr.response);//request from server
//     console.log(data1)
// data1.forEach(element => {
//     console.log(`contry name ${element.name}, capital ${element.capital}, flag ${element.flag}`)
// });
// }

// getdetails();




