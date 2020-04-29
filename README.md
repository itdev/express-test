# Express Test

### Part 1 
Your challenge is to create a new route at `/abbey_road.csv` that returns the 
`data/abbey_road.txt` file in CSV format. The headers for the CSV should be 
"Track #", "Track Name", and "Track Length".

### Part 2
Update the route so that users can pass in an optional "sort=" query param that will sort the results in ASC order based off the following params:
* 1 - sort ASC by track number
* 2 - sort ASC by track name
* 3 - sort ASC by track length
* If no query param is passed in, the default is "1".


### Getting Started
The [express-csv](https://www.npmjs.com/package/express-csv) library is included 
as a dependency to aid with returning a CSV. `index.js` contains a "Hello World" Express server.
* Install packages with `yarn install`
* Start the server with `yarn start`
