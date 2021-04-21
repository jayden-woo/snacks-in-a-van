**The University of Melbourne**
# INFO30005 – Web Information Technologies

# Group Project Repository

Welcome!

## Table of contents
- [INFO30005 – Web Information Technologies](#info30005--web-information-technologies)
- [Group Project Repository](#group-project-repository)
  - [Table of contents](#table-of-contents)
  - [Team Members](#team-members)
  - [General info](#general-info)
  - [Technologies](#technologies)
  - [Adding Images](#adding-images)
  - [Postman Requests](#postman-requests)

## Team Members

| Name         |                 Task                  |     State |
| :----------- | :-----------------------------------: | --------: |
| Xinyue Zhang | Back End, Database, Heroku connection | completed |
| Lilian Ly    |   Database, README Format, Postman    | completed |
| Zihang Zhang | Back End, Database, Heroku connection | completed |
| Juncheng Woo |      Back End, Database, Postman      | completed |
| Xinhui Chen  |          Back End, Database           | completed |

## General info
This project is by Generator, a INFO30005 student team, based on the business requirements from Snacks in a Van, a startup company in Melbourne managing a fleet of mobile food trucks that operate as cafes. This operation involves creation of a web app for customers and vendors to use, viewable through vertical mobile devices and horizontal tablets. 
	
## Technologies
Project is created with:
* NodeJs 15.14.0
* npm 7.7.6

<!--
## Code Implementation

Include code connecting to database and the GET/POST request?



You can include a code snippet here.

```HTML
<!--
Example code from: https://www.w3schools.com/jsref/met_win_alert.asp
__>

<!DOCTYPE html>
<html>
<body>

<p>Click the button to display an alert box.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  alert("Hello! I am an alert box!");
}
</script>

</body>
</html>
```
-->

## Adding Images

Image values contained in MongoDB are Strings. They point to images that are hosted on https://unsplash.com/. To open up the image, append the String to https://unsplash.com/photos/.

For example, to access "cappucinno" photos from menu that has String "T-kJRC_xqFI" in images, visit https://unsplash.com/photos/T-kJRC_xqFI

<!--
Or you can add your own images from a folder in your repo with the following code. The example has a folder `Gifs` with an image file `Q1-1.gif`:
```HTML
<p align="center">
  <img src="Gifs/Q1-1.gif"  width="300" >
</p>
```

To create a gif from a video you can follow this [link](https://ezgif.com/video-to-gif/ezgif-6-55f4b3b086d4.mov).


-->

## Postman Requests

The following information explains how the Postman requests are to be performed. The file containing the requests can be located in the repository. 

For all POST requests, navigate to the the "Headers" section and under "Keys", input "Content-Type" with a corresponding value of "application/json".

**Customer Features**


| Feature | Description | Access Link|  Request Type & Sample Data (if applicable) |
| :----------- | :------ | :---: | :--------: |
| View customer menu | This shows a list of the menu items available, including the prices and the ID for the unsplash.com image. See above in [Adding Images](#adding-images) for more details. | https://project-t10-generator.herokuapp.com/customer/menu | GET Request  |
| View Snack Details | When entering the snack name, the snack details of that particular snack are displayed. The details include name, price, image and description. The access link to the right shows an example of what would display of the snack "small cake" is visited | https://project-t10-generator.herokuapp.com/customer/menu/small%20cake | GET Request |
| Start Customer Order | This request allows a customer to add an order. In the Postman file, the example shows a customer creating an order of 2 cappuccinos. The orders begin from the page that contains the snack. In this instance, the user is required to first browse to the cappuccino page, and then select a quantity of 2. | https://project-t10-generator.herokuapp.com/customer/menu/cappuccino | POST Request. Under body, input a "quantity" of 2.|

<br/><br/> 

**Vendor Requests**
| Feature | Description | Access Link|  Request Type & Sample Data (if applicable) |
| :----------- | :------ | :---: | :-------- |
| Setting Van Status | This section demonstrates two requests types. The first is changing the status of the van to be online and therefore ready to accept orders. The second request allows the van send information about its most recent changed location. These features can be updated separately or together. | https://project-t10-generator.herokuapp.com/vendor/Gogu Gogu refers to the name of a van, this can be changed, but for the purpose of this example, will be retained. | POST Request. In this request, the user will need to supply "isOnline" to the Boolean value of true. This will update the status of the van to online. For the second section, to send location, insert desired values for "latitude" and "longitude" as Number values. The test here has used 982347 for the latitude and 765234 for the longitude. |
| Show Outstanding Orders | Orders that have the status "cooking" will be shown when queried with the van's ID/name. | https://project-t10-generator.herokuapp.com/vendor/orders/987/ | GET Request |
| Mark Fulfilled Orders  |This request allows for the van to mark an order as "READY" after it has been cooked and is available for pickup. Two examples are provided in this Postman request, but they both serve the same purpose. | https://project-t10-generator.herokuapp.com/vendor/BaBVAN | POST Request. In body, set the "status" to String "READY". |



**Now Get ready to complete all the tasks:**

- [x] Read the Project handouts carefully
- [x] User Interface (UI)mockup
- [ ] App server mockup
- [ ] Front-end + back-end (one feature)
- [ ] Complete system + source code
- [ ] Report on your work(+ test1 feature)

