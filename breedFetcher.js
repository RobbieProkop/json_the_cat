const request = require("request"); // allows to request info from a website
const APIurl = "https://api.thecatapi.com/v1/breeds/search";
// const breedName = process.argv[2];


const fetchBreedDescription = function(breedName, callback){
  request(`${APIurl}?q=${breedName}`, function(error, response, body) {
    const jsonBody = JSON.parse(body);
    if(!breedName){
    // console.log("Please enter a breed.");
    callback(error, "Please enter a breed.");
    return;
    };
    if(!jsonBody || !jsonBody.length){
    // console.log("Breed does not exist.");
    callback(error, "Breed does not exist.");
    return;
    };
    const catName = jsonBody[0].name;
    const catDescription = jsonBody[0].description;
    callback(error, catDescription)
  });
}

module.exports = {fetchBreedDescription};
// const fetchBreedDescription = request(`${APIurl}?q=${breed}`, function(error, response, body){
//   const jsonBody = JSON.parse(body);
//   if(!breed){
//     console.log("Please enter a breed.");
//     return;
//   };
//   if(!jsonBody || !jsonBody.length){
//     console.log("Breed does not exist.");
//     return;
//   };
//   const catName = jsonBody[0].name;
//   const catDescription = jsonBody[0].description;
//   console.log(`${catName}, \n${catDescription}`);
// });


// const breedDescription = fetchBreedDescription(breedName, (error, description) => {

// })
