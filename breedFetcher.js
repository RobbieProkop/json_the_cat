const request = require("request"); // allows to request info from a website
const APIurl = "https://api.thecatapi.com/v1/breeds/search";
const breed = process.argv[2];

const catBreedPromise = request(`${APIurl}?q=${breed}`, function(error, response, body){
  // console.log('error: ', error) //prints error if one exists
  // console.log('statusCode: ', response && response.statusCode); // print the response status code if response was received
  // console.log("Parsed body: ", JSON.parse(body)); // print html for url that was passed through
  const jsonBody = JSON.parse(body);
  if(!breed){
    console.log("Please enter a breed.");
    return;
  };
  if(!jsonBody || !jsonBody.length){
    console.log("Breed does not exist.");
    return;
  };
  const catName = jsonBody[0].name;
  const catDescription = jsonBody[0].description;
  console.log(`${catName}, \n${catDescription}`);
});
