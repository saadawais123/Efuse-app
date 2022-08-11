# For backend
cd backend 
npm i 
npm start


The backend will be running on port 5000

I had created a demo user using the api for user through postman which will help further in getting the posts 

# for Front end

cd newsfeed-app

npm i 
npm start

The userid is hardcoded and picked from the db of the user i created through postman as there was no requirement for Login or signup

The post which are being seen are of that user the userid is being passed to the api which then fetches the posts of that user.

Given more time i can also implement a login signup with token authentication with routing and can handle the users more dynamically.
