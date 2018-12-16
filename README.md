# Easycrud

![Back](https://img.shields.io/badge/back%20end-express.js-%2390c53f.svg)
![Front](https://img.shields.io/badge/front%20end-reactjs-%2361dafb.svg)

Have an awesome idea for your next perfect interface and don't want to waste your time to backend stuff? 
Focus on really important things, this script will take this part and create CRUD API for you in a few seconds. This tool will create POST, PUT, DELETE and GET methods for you for the route you entered. No database required. Zero time to the configuration, no need to use the console, GUI is included.
## Getting started
First of all you need to be sure, that you have nodejs installed. I used version 11.1.0 and npm version 6.4.1. If you have an older node
version installed and you want to keep it, use this tool [nvm](https://github.com/creationix/nvm) it will allow you to use few node versions and switch between them.

Clone this repo 

```git clone https://github.com/AModin/easycrud.git```

Or download as ZIP from the github interface.

Go to easycrud directory:

```cd ./easycrud```

Install and run:

```npm i```

```npm start```

After the server is running check out the dashboard at localhost:8000.

![test page1](https://user-images.githubusercontent.com/15379788/50058292-3ef58000-0187-11e9-882b-571ce3a0ca22.png).

Try to create route `users` and fetch data from any localhost port:

```javascript
fetch('http://localhost:8000/users').then(res => res.json()).then( res => console.log(res))
```

## Methods

## POST/PUT
To save the data you need to attach the body to request.

[![POST/PUT method add entry](https://user-images.githubusercontent.com/15379788/48933035-bc72fb00-ef0f-11e8-9140-a13d84815d53.png)](https://www.youtube.com/watch?v=8eTPd63SDOo)

You can change item in the collection by sending item with existing id in case "Change by id" option is selected,
otherwise, the new item will replace the old one.

[![POST/PUT method change entry](https://user-images.githubusercontent.com/15379788/48933034-bbda6480-ef0f-11e8-8688-cb94ffcb90fe.png)](https://www.youtube.com/watch?v=M3DNh1jdH_Y)

## GET

The request without any parameters will return all enteries. 

[![Get without parameters](https://user-images.githubusercontent.com/15379788/48933032-bbda6480-ef0f-11e8-8edc-fb3d9f3e1baf.png)](https://www.youtube.com/watch?v=4rVxLHxpzQY)

You can filter the data to get only needed items.
For example request with `?lastName=Doe` will return only items with lastName Doe.

Also can pass a few URL parameters like this: `/users?firstName=Joe&lastName=Doe&firstName=Sarah`

[![Get with parameters](https://user-images.githubusercontent.com/15379788/48933031-bbda6480-ef0f-11e8-8d7c-0d456726d94d.png)](https://www.youtube.com/watch?v=OpBUUq9TCmE)

## DELETE

If you use collection data type you should add URL parameter id to delete some specific entry.

[![Delete from collection method usage](https://user-images.githubusercontent.com/15379788/48933036-bda42800-ef0f-11e8-9112-000d9d38d70d.png)](https://www.youtube.com/watch?v=SmaGp4QhNyQ)

In case you selected "Single item" you can use DELETE request without any parameters.

[![Delete single item method usage](https://user-images.githubusercontent.com/15379788/48933030-bbda6480-ef0f-11e8-9973-e02953d2a703.png)](https://www.youtube.com/watch?v=fcEdUkU5wRg)

## Warning :exclamation: :exclamation: :exclamation:

Don't use it for production it's unsaved and not optimized!

## Bult with
* [Express](https://github.com/expressjs) - Used as backend
* [Reactjs](https://reactjs.org/) - Used in the front end
* [AntD](https://ant.design/) - UI kit for the dashboard
* [Node JSON DB](https://github.com/Belphemur/node-json-db) - For saving the data
* [Lodash](https://lodash.com/) - Used only one but very useful lodash function :)
