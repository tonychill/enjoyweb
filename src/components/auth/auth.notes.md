authentication components may interact primarily with the user management services.

Update membership status of user after sign up

Add membership status to the user service and manage all user interaction there.

See what cognito offers in terms of user profile management???

lambda trigger to fire when a user signs up to handle membership levels.

- add the new user to the user managment service
- denote the type of user and persist in into the user managment service db (membership type. ).
- Before the club signup process the presignup lambda will need to query the number of current paid
  members currently in the database. Is the returned value is greater than a defined quatntity
  retun to the user a messaged stating that the club is full .'

The following method allows for lambda triggers. How?

Auth.signIn({
username, // Required, the username
password, // Optional, the password
validationData, // Optional, an array of key-value pairs which can contain any key and will be passed to your Lambda trigger as-is.
}).then(user => console.log(user))
.catch(err => console.log(err));
