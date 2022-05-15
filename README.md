# Chat App Rest API - Node.js, Express.js, MongoDB, Postman

# https://abrachatapp.herokuapp.com/

MERN stack chat application rest API backend system that is responsible for handling messages between users.<br/>
CURD operations:

•	Write message<br/>
•	Get all messages for a specific user<br/>
•	Get all unread messages for a specific user<br/>
•	Read message (return one message) <br/>
•	Delete message (as owner or as receiver)

# Instructions:


To initial dummy data to the db, please go “db.js” file which located in “AbraChatApp/server/config”,
go to line 12 and remove the “//“ marks before initUsers() then save.
Make sure to mark it as a comment again to avoid duplicate data in the next saves.


1.	Create a user: POST https://abrachatapp.herokuapp.com/register

   <img width="843" alt="צילום מסך 2022-05-11 ב-21 16 21" src="https://user-images.githubusercontent.com/63442785/167920479-537b7d56-6739-448d-af72-77e0298928f5.png">

2.	Login to user: POST https://abrachatapp.herokuapp.com/login

3.	Get All users: GET https://abrachatapp.herokuapp.com/users

4.	Get All messages: GET https://abrachatapp.herokuapp.com/messages

5.	Send Message: POST https://abrachatapp.herokuapp.com/messages/SENDER-USERID 

6.	Get All messages of specific user: GET https://abrachatapp.herokuapp.com/messages/USERID 

7.	Read Message: PUT https://abrachatapp.herokuapp.com/messages/MESSAGEID 

8.	Get All Unread messages of specific user: GET https://abrachatapp.herokuapp.com/messages/USERID 

9.	Delete Message: DELETE https://abrachatapp.herokuapp.com/messages/MESSAGEID 


| resource      | description                       |
|:--------------|:----------------------------------|
| `/register`      | returns a list of all works (journal articles, conference proceedings, books, components, etc), 20 per page
| `/funders`    | returns a list of all funders in the [Funder Registry](https://github.com/Crossref/open-funder-registry)
| `/members` | returns a list of all Crossref members (mostly publishers) |
| `/types`      | returns a list of valid work types |
| `/licenses`  | return a list of licenses applied to works in Crossref metadata |
| `/journals` | return a list of journals in the Crossref database |
