

# Final Project: Real State

This web application is a part of an online course by Harvard University.

This project is called Real State 4U, where you can find houses available for rent or sale.
Users are able to browse the properties list or via the map, save houses to check later, make information requests, apply filters such as number of rooms, size, construction year, price and so on. The owners are able to add and update the properties, and view information requests that users submitted.

## Features
-  Register
-  Login
-  Save houses
-  Request information
-  Apply filters
-  See house location in the map

## Technologies
-  Python
-  Django
-  SQL
-  JavaScript
-  React
-  Redux
-  HTML

### Youtube link: https://youtu.be/gsfHha2vtJg

## :gear: Setup your own

```bash
# Clone repo
$ git clone https://github.com/momeyer/realstate4u.git 

$ cd realstate4u

# Open pipenv virtual environment 
$ pipenv shell

# Install the project dependencies takes from Pipfile.lock 
$ pipenv install 

# Migrate database and load fixture file to populate database 
$ cd real_state
$ python3.6 manage.py migrate  
$ python3.6 manage.py loaddata marketplace/fixtures/database.json

# Run server 
$ python3.6 manage.py runserver

# To make changes, run the following
$ npm install
$ npm run dev

```

![gif](/snapshots/gif.gif)
![image1](/snapshots/1.png)
![image2](/snapshots/2.png)
![image3](/snapshots/3.png)
![image4](/snapshots/4.png)
![image5](/snapshots/5.png)
![image6](/snapshots/6.png)
![image7](/snapshots/7.png)

