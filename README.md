# SocialNetAPI
SocialNetAPI is an in-development API which includes all the standard functionalities of a classic social network. Its neutral features allow it to be used for every kind of social network, independently of its content or its target audience.
Here's a list of what SocialAPI can do.

### User-related functionalities
- Create an account
- Update an account
- Delete an account
- Follow/unfollow accounts
- Login/logout

### Content-related functionalities
- Create a post
- Update a post
- Delete a post
- Like a post
- Comment a post

### Admin-related functionalities
An admin has access to each of the functionalities above, except for modyfing a user's password and email. In order to respect user privacy, passwords are hashed before being saved on MongoDB.

### Tech stack
SocialNetAPI is being developed using Node.js, Express, and MongoDB. 
Everything is written in TypeScript.
