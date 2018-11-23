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

![userspost](https://user-images.githubusercontent.com/15379788/48931564-0ce65a80-ef08-11e8-8140-a8fa5ea86629.gif)

You can change item in the collection by sending item with existing id in case "Change by id" option is selected,
otherwise, the new item will replace the old one.

![userspostchange](https://user-images.githubusercontent.com/15379788/48931562-0c4dc400-ef08-11e8-98bf-16b680dcb250.gif)

## GET

The request without any parameters will return all enteries. 

![getwithoutparameters](https://user-images.githubusercontent.com/15379788/48931568-0ce65a80-ef08-11e8-86b4-6264fb6b1576.gif)

You can filter the data to get only needed items.
For example request with `?lastName=Doe` will return only items with lastName Doe.

Also can pass a few URL parameters like this: `/users?firstName=Joe&lastName=Doe&firstName=Sarah`

![getwithparameters](https://user-images.githubusercontent.com/15379788/48931567-0ce65a80-ef08-11e8-9483-7a5acebc1208.gif)

## DELETE

If you use collection data type you should add URL parameter id to delete some specific entry.

![deletesingleitem](https://user-images.githubusercontent.com/15379788/48931565-0ce65a80-ef08-11e8-842d-299023dbac9f.gif)

In case you selected "Single item" you can use DELETE request without any parameters.

![delete](https://user-images.githubusercontent.com/15379788/48931566-0ce65a80-ef08-11e8-914d-920f104a4c42.gif)

## PR are welcome! Have a fun.

