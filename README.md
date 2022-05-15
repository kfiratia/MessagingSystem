# Messaging System

## System purpose
An API CRUD system for users and massage management.  
Users can register and login to the system and also  
read,send and delete messages.  

## features


### 1)Registration
In order to register to the system we need to enter  
the following url by POST method:  
https://messaging-system-kfir.herokuapp.com/registered  
along with "name" and "password" parameters.
![alt text for screen readers](./assets/registration.jpeg "system registration example").


### 2)Login
In order to login the system  we need to enter  
the following url by POST method:  
https://messaging-system-kfir.herokuapp.com/login  
along with "name" and "password" parameters.
![alt text for screen readers](/assets/login.jpeg "system login example").
after the login the user will receive a session token.  


### 3)Create message
in order to create a new message we need to enter  
the following url by POST method:  
https://messaging-system-kfir.herokuapp.com/messages/{name}   
along with "receiver", "subject" and "text" parameters.    
also,Token is needed in the request header(key=x-access-token,value={Token})  
![alt text for screen readers](/assets/create_message.jpeg "create message example").


### 4)Get all messages
in order to get all messages we need to enter  
the following url by GET method:  
https://messaging-system-kfir.herokuapp.com/messages/{name}  
also,Token is needed in the request header(key=x-access-token,value={Token})
![alt text for screen readers](/assets/get_all_messages.jpeg "get all messages example")


### 5)Get all unread messages
in order to get all unread messages we need to enter  
the following url by GET method:  
https://messaging-system-kfir.herokuapp.com/messages/{name}/unread  
also,Token is needed in the request header(key=x-access-token,value={Token})  
![alt text for screen readers](/assets/get_all_unread_messages.jpeg "get all unread messages example")  


### 6)Read a message
in order to read a message we need to enter  
the following url by PUT method:  
https://messaging-system-kfir.herokuapp.com/messages/{name}/{id} 
also,Token is needed in the request header(key=x-access-token,value={Token})  
![alt text for screen readers](/assets/read_message.jpeg "read a messages example")  


### 7)Delete a message
in order to delete a message we need to enter  
the following url by DELETE method:  
https://messaging-system-kfir.herokuapp.com/messages/{name}/{id} 
also,Token is needed in the request header(key=x-access-token,value={Token})  
![alt text for screen readers](/assets/delete.jpeg "delete a messages example")
