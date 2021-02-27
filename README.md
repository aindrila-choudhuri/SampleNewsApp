## Available Scripts

Clone the project

From the project directory navigate to client (`cd client`) directory and run:
### `npm install`

The backend URL is configurable. 
Create a folder config.js in the directory `SampleNewsApp/client/src/config/config.js`
Create a variable `URL` and set the value
Example code  
    `var config = {};`  
    `config.URL = 'http://localhost:1000';`  
    `module.exports = config;`   

From the project directory navigate to server (`cd server`) directory and run:
### `npm install`
Create a folder config.js in the directory `SampleNewsApp/server/config/config.js`
Create variables `API_KEY`, `COUNTRY_CODE`, `EVERYTHING_URL` and set the values
Example code  
    `var config = {};`  
    `config.PORT = 1000;`  
    `config.API_KEY = "sample API key";`  
    `config.COUNTRY_CODE = "sample country code";`  
    `config.EVERYTHING_URL = "sample url";`  
    `module.exports = config;`   

In the project directory, run:
### `npm install`
### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits in the client code.\
You will also see any lint errors in the console.