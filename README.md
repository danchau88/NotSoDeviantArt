## README

### NotSoDeviantArt, a deviantArt.com clone.
![alt text](https://github.com/danchau88/NotSoDeviantArt/blob/master/app/assets/images/NotSoDeviantArtLogo.png "NotSoDeviantArt Logo 1")

# WebApp
NotSoDeviantArt is an app that houses creative outlets to express one's artistic abilities. You have access to numerous fantastic creations made from others whether it be from hobbyist doodlers to aspiring professionals. All are welcome to embrace their own artistic deviant sides (just not too deviant, hence the name). There are comments that can be made to give and receive feedback and praise to your deviations, and please be respectful of others' works as if it were your own.

## Demo
Check it out here (working live demo)! [NotSoDeviantArt.com](https://not-so-deviant-art.herokuapp.com/#/)

## Technologies and Tools Used
* **Ruby Version**: 5.2.3
* **npm + webpack**
* **Ruby on Rails** - Rails is a great backend system that allows:
  * Handling over user authentication and server session.
  * Giving great control over routes and managing what requests come in and what goes out
* **React and Redux** - A very capable and powerful frontend-tool to display in the frontend and get requests from the backend.
* **PostgreSQL** - PostgreSQL is a powerful open source object-relational database that utilizes SQL language effectiviely and helpfully. 
* **AWS S3** - Allows for online storage of images and file types on the web as cloud storage instead having to use local space.
* **Heroku** - Used as the hosting service for the App. 

**Laguages used:**
* Ruby
* Javascript

## Site
### Features:
### User Authentication
The Login and Signup forms utilize a modal component when either the "Log In" or "Sign Up" button is pressed giving a nice user-auth form on the right and example artwork with a motivating description on the left. To acheive this, the modal content was split into two halves where the right housed the features and form, and the left displays an example image and description text for the App. This component allows great learning material for CSS styling, frontend, and backend prowess. Below is what can be accessed from the live demo! 
![alt text](https://github.com/danchau88/NotSoDeviantArt/blob/master/app/assets/images/Capture.PNG "NotSoDeviantArt Logo 1")
### Deviation Show/Comments
The Comments component proved to be one of the most React-Redux and jBuilder intensive from seeting up the backend to have access to the data you want from the api_util AJAX requests to the actions to the reducers and finally to the React Component. This section gives a lot of felxibility of set up in order to access users and deviations filters for each comment. There needed to be a great deal of actions, reducers, and refactoring of api-util AJAX calls in order to have access to all the keys needed for comments in each deviation.
![alt text](https://github.com/danchau88/NotSoDeviantArt/blob/master/app/assets/images/DevShowContainer.jpg "DevShowContainer_snippet")

### Styling:
### CSS 
For CSS, this app uses mainly SCSS app look and feel really smooth as well as giving it a dynamically sizing attribute to navigating through the app. The CSS is organized in a component folder under style sheets that is imported through the application.scss. Within the components folder, I have an index.scss that houses all the custom-variables I used throughout my scss files to change all of them dynamically.
![alt text](https://github.com/danchau88/NotSoDeviantArt/blob/master/app/assets/images/CSS_snippet.PNG "CSS_snippet")

### Future direction/installments
* upload deviations
* editing and removing comments and deviations
* favorites and likes
* user show page

