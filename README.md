This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup and run REACT-JS-ASSIGNMENT app

After clone this repo to your local machine, do following steps to run this app:   
Run command:
1. ### `cd react-js-assignment/`
2. ### `npm install`
3. ### `Create .env file at root project and create a environment variable. See .env-sample`
3. ### `npm start`

After finished all of the commands above, you can open any browsers and   
access to `http://localhost:3000` to see visit website.

This project use:   
 * [Redux](https://redux.js.org/) to save data customer.
 * [React-bootstrap-table2](https://react-bootstrap-table.github.io/react-bootstrap-table2/) to display table customers and export csv file.



Structure for this project.   

<pre>
src/   
  ├──apis/  
  |    ├──index.js      
  |    ├──request.js   
  |    └──url.js   
  |    
  ├──components/  
  |    └──dataTable/   
  |    |     └──index.js   
  |    └──index.js      
  ├──constants/   
  |    ├──column.js   
  |    └──index.js   
  |
  ├──containers/   
  |    ├──__test__/
  |    |     └──App.test.js   
  |    ├──home/   
  |    |    ├──actions.js
  |    |    ├──events.js   
  |    |    ├──index.js   
  |    |    └──reducer.js 
  |    └──App.js   
  |
  ├──store/   
  |    ├──index.js   
  |    └──reducers.js   
  ├──index.js   
  ├──index.scss   
  ├──serviceWorker.js   
  └── setupTests.js
</pre>
