# LAB - 19

## Socket.io - API Server

### Author: Joé Jemmely

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-joejemmely/lab-19-api-server/pull/1)
- [travis](https://github.com/401-advanced-javascript-joejemmely/lab-19-api-server)

#### Documentation

## events

files

| Param | Description |
| ----- | ----------- |
| SAVE  |             |
| ERROR |             |

database

| Param  | Description |
| ------ | ----------- |
| CREATE |             |
| READ   |             |
| UPDATE |             |
| DELETE |             |

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
