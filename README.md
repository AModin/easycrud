# Why?
Have an awesome idea for your next perfect interface and don't want to waste your time to backend stuff? 
Focus on really important things, this script will take this part and create CRUD API for you in a few seconds.
# How?
First of all you need to be sure, that you have nodejs installed. I used version 11.1.0 and npm version 6.4.1. If you have older node
version installed and you want to keep it, use this tool [nvm](https://github.com/creationix/nvm) it will allow you to use few node versions and switch between them.

Clone this repo:

```git clone https://github.com/AModin/easycrud.git```

Go to easycrud directory:

```cd ./easycrud```

Install and run:

```npm i```

```npm start```

After the server is running check out the dashboard at localhost:8000

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/15379788/48918766-ca893300-ee9f-11e8-9c10-828b35327f7e.gif)

# Usage
## POST/PUT
To save the data you need to attach the body to request.

[![POST/PUT method add entry](https://img.youtube.com/vi/8eTPd63SDOo/0.jpg)](https://www.youtube.com/watch?v=8eTPd63SDOo)

You can change item in the collection by sending item with existing id in case "Change by id" option is selected,
otherwise, the new item will replace the old one.

[![POST/PUT method change entry](https://img.youtube.com/vi/M3DNh1jdH_Y/0.jpg)](https://www.youtube.com/watch?v=M3DNh1jdH_Y)

## GET

The request without any parameters will return all enteries. 

[![Get without parameters](https://img.youtube.com/vi/4rVxLHxpzQY/0.jpg)](https://www.youtube.com/watch?v=4rVxLHxpzQY)

You can filter the data to get only needed items.
For example request with `?lastName=Doe` will return only items with lastName Doe.

Also can pass a few URL parameters like this: `/users?firstName=Joe&lastName=Doe&firstName=Sarah`

[![Get with parameters](https://img.youtube.com/vi/OpBUUq9TCmE/0.jpg)](https://www.youtube.com/watch?v=OpBUUq9TCmE)

## DELETE

If you use collection data type you should add URL parameter id to delete some specific entry.

[![Delete from collection method usage](https://img.youtube.com/vi/SmaGp4QhNyQ/0.jpg)](https://www.youtube.com/watch?v=SmaGp4QhNyQ)

In case you selected "Single item" you can use DELETE request without any parameters.

[![Delete single item method usage](https://img.youtube.com/vi/fcEdUkU5wRg/0.jpg)](https://www.youtube.com/watch?v=fcEdUkU5wRg)


## PR are welcome! Have a fun.

