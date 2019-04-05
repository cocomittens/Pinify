# Pinify
Pinify is a full stack clone of the popular website Pitnerest. Users can create pins, an image with an optional title, description and URL to link to. These pins can be saved to a collection of pins called a "board". Boards are contained on a customizable user profile, which can be followed by other users. Users can view others' pins and save them to their own boards through the splash page, which contains a collection of recommended pins for them, a follows feed, which contains the pins of followed users, and through a user profile directly.

## Demo
[Here](https://pinify-app.herokuapp.com) is a working live demo

## Key Features
### User Authentication
Upon their first visit to the site, users are presented with a login page. They must sign in or register in order to access site content.  

![Login Page](https://i.imgur.com/AbnQ3L3.jpg "Login Page")

### Splash Page
Once logged in, users can view a personalized Splash Page. This contains recommended pins personalized for them, which they can directly save to their boards or view more information on a detailed pin show page.  

![Splash Page](https://i.imgur.com/kTnEeMQ.jpg "Splash Page")

### User Profile
Here, users can view the boards and pins of any user. They can find a user's profile either from a link on one of their pins, or directly through a customizable profile URL. If a user decides to follow a profile, the followed users' pins will appear on the following feed of the user following the profile.  

![User Profile](https://i.imgur.com/qEQ0A1y.jpg "User Profile")

### Create Pin
Here, users can create a pin by uploading an image and including an optional title, description, and URL the pin will link to. A pin must be initially saved to at least one of a users' boards, but can be saved to any board by any user once it is created.  

![Create Pin](https://i.imgur.com/PmvFK7Z.png "Create Pin")

### View Pin
The view pin page contains a higher resolution image, title, and URL. If this is a users' own pin, they can update this information on this page. Otherwise, the information is view-only.  

![View Pin](https://i.imgur.com/D2nVmsC.jpg "View Pin")

## Technologies Used
- Ruby on Rails
- PostGreSQL
- AWS
- React.js
- Redux
- HTML5
- CSS3

## Future Features
