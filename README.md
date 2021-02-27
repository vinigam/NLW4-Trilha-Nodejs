# NLW4-TrilhaNodejs
api that sends email to users and calculate net promoter using their ratings about the '' company ''

#Running
Install all needed dependencies and run :<br>

# 01 - npm run dev
# 02 - create user and survey

POST localhost:8000/users <br>
{
  "name": "username",
  "email" : "userEmail"
}

POST localhost:8000/surveys <br>
{
  "title": "survey_title",
  "description": "survey_description"
}


# 03 - Send email to user 

POST localhost:8000/sendMail <br>
{
  "email": "userEmail,
  "survey_id": "survey_id"
}

# 04 - Open the link receveid in command line and send an rating <br>
![alt text](https://github.com/vinigam/NLW4-TrilhaNodejs/blob/main/images/email_received.png)

#05 - Get the Net Promoter result 

GET localhost:8000/nps/:survey_id <br>

![alt text](https://github.com/vinigam/NLW4-TrilhaNodejs/blob/main/images/get_nps_result.png)
