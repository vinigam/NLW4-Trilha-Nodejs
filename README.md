# NLW4-TrilhaNodejs
api that sends email to users and calculate net promoter using their ratings about the '' company ''

#Running
Install all needed dependencies and run :<br>

# 01 - npm run dev
# 02 - create user and survey

POST localhost:8000/users
{
  "name": "username",
  "email" : "userEmail"
}

POST localhost:8000/surveys
{
  "title": "survey_title",
  "description": "survey_description"
}


# 03 - Send email to user

POST localhost:8000/sendMail
{
  "email": "userEmail,
  "survey_id": "survey_id"
}
