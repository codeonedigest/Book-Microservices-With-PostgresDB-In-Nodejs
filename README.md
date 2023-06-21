# Microservices 

A basic application to demonstrate the microservices architecture with postgresdb in nodejs using books store management.

# Prerequisites before run the project 
- install latest version of [nodejs](https://nodejs.org/en/download)
- install latest version of [postgresdb](https://www.postgresql.org/download/)
- Good to have [postman](https://www.postman.com/downloads/) installed to test the microservices.

## Commands

| Name | Description |
--- | --- |
| npm run startbookserver| Starts book server|

# How to test
import postman collection in postman and test.
you can find the postman collections here. 
https://github.com/codeonedigest/Book-Microservices-With-PostgresDB-In-Nodejs/tree/master/test/Nodejs-book-microservice-postgresdb-demo.postman_collection.json
 

## Books API
| API | Method| Description |
|--- | --- |--- |
| /api/v1/book/add |POST| Add new book |
|/api/v1/books|GET|Get all the books|
| /api/v1/book/:uuid |GET| Get book by id |
| /api/v1/book/:uuid |PUT| Update book by id |
| /api/v1/book/:uuid |DELETE| Delete book by id |

