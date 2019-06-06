# LAB - 19

## Socket.io - API Server

### Author: Joé Jemmely

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-joejemmely/lab-19-api-server/pull/1)
- [travis](https://github.com/401-advanced-javascript-joejemmely/lab-19-api-server)

#### Documentation

- [api docs](https://lab-09-joejemmely.herokuapp.com/api/v1/doc/) (API servers)
  - The swagger documentation doesn't reflect the :model parameter because in this particular case, the routes are not created automatically when a new model is created. The users reading the api doc wants to know what routes to use and what they return. The :model parameter do not matter for them. It would be different if they were able to create new routes through the api.
- [jsdoc](https://lab-09-joejemmely.herokuapp.com/doc/) (Server assignments)

### Setup

#### `.env` requirements

- `PORT` - Port Number
- `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app

- `npm start`
- Endpoint: `api/v1/categories`
- Endpoint: `api/v1/players`
- Endpoint: `api/v1/teams`

#### Tests

- How do you run tests? `npm test`
- What assertions were made? Models and server are partially tested

#### UML

![UML](https://www.lucidchart.com/publicSegments/view/e6779e94-928c-42f8-8ca4-ea1cd81b73e4/image.png)
