### Info

- You can access API documentaion via http://localhost:3000/api.
- There are 4 models those are users, movies, sessions and tickets.
- There are two roles those Manager and Customer. You can register via POST /users endpoint. After that you can login via /auth/login service. Because of the deadline i could not implement hashing algorithm for password.
- Managers can add, delete, update movies, Users can list movies.
- In sessions, time slots are like 1000 is 10 am, 2000 is 20 pm. It makes timeline easy to work. Also date field is unix time stamp. Number field is easly index in order to filter.
- You can use POST /ticket endpoint in order to buy ticket.
- I implement a property named isWatched for ticket to list watched movies of user. You can watch movie via /tickets/:id/isWatched endpoint. These endpoint updates isWatched field. 
- Listing watched movies via /tickets?isWatched=true.
- I run out of time to implement tests. So those are default tests those nest created.
- Node js version: 20.17
- API uses my Mongodb Atlas database cluster. So you can use it directly.
- Implemented swagger but in order to show response in document, i should implement with class based mongoose. I just created them object based(schema). Swagger can not get response structure from schema. it needs to be class. But several other options implemented.
- I used Auth guard for jwt auth and role guard for role management.
- For basic security measures, used Helmet.
- In order to manage env variables. config module is implemented. Just created for prod. We can create for staging, test and dev.


