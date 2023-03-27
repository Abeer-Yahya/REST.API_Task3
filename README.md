# REST API Task

In this repo, you can find **REST API** with full **CRUD** functionality and stores data in an **array in the memory**.

Also, there is a **logger** that records the user's IP and the endpoints accessed with their respective HTTP methods.

## API EndPoints

- Get All data: https://pwc-rest-api.onrender.com/api/tasks

- Get single item: https://pwc-rest-api.onrender.com/api/tasks/:id

- Create new item: https://pwc-rest-api.onrender.com/api/tasks

```JSON
// Request body
{"title" : ""};
```

- Update an item: https://pwc-rest-api.onrender.com/api/tasks/:id

```JSON
// Request body
{"title" : ""};
```

- Delete an item: https://pwc-rest-api.onrender.com/api/tasks/:id

## Technologies Used

- Node.js

### NPM packages

- [Express](https://www.npmjs.com/package/express) : web framework for Node.js.
- [Joi](https://www.npmjs.com/package/joi) : For input validation.
