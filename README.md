# REST API Task

In this repo, you can find **REST API** with full **CRUD** functionality and stores data in an **PostgreSQL Database**.

Also, there is a **logger** that records the user's IP and the endpoints accessed with their respective HTTP methods.

[API Demo](https://pwc-node-api.onrender.com)

## API EndPoints

- Get All data: /api/v1/patients

- Get single item: /api/v1/patients/:id

- Create new item: /api/v1/patients

```JSON
// Request body
{"name" : "First and Last name",
 "contact": phone number as integer
}
```

- Update an item: /api/v1/patients/:id

```JSON
// Request body
{"contact" : phone number as integer  }
```

- Delete an item: /api/v1/patients/:id

## Technologies Used

- Node.js

### NPM packages

- [Express](https://www.npmjs.com/package/express) : web framework for Node.js.
- [Joi](https://www.npmjs.com/package/joi) : For input validation.
- [dotenv](https://www.npmjs.com/package/dotenv) : To use .env file.
- [pg](https://www.npmjs.com/package/pg) : To connect a PostgreSQL database.
