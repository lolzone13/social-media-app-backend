
# Blogging Website API

This is the REST API for the blogging website.

[Frontend of the application](https://github.com/lolzone13/social-media-app)


## Tech Stack

**Client:** Next.js, TailwindCSS

**Server:** Node, Express, PostgreSQL


**Authentication:** JWT

## API Reference

### Register new user

```http
  POST /api/v1/auth/register
```

| Headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Username` | `string` | **Required**. Username |
| `Email` | `string` | **Required**. Your email id |
| `password` | `string` | **Required**. Set a Password |

#### Response

```http
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM3YzY2MjEtZWVhNC00NzFkLWEzNjktYWQ1ZjViMzU3NTE2IiwiaWF0IjoxNjU3MTE1NDg4LCJleHAiOjE2NTcyMDE4ODh9.qQwzD5SMQ0yE-xAaeNlSOMHKtjtby722M4qTwKjsWvM",
    "data": {
        "username": "deslol",
        "email": "mohitscience123@gmail.com"
    }
}
```

#### Login user

```http
  GET /api/v1/auth/login
```

| Headers | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Email` | `string` | **Required**. Your email id |
| `password` | `string` | **Required**. Your Password |



#### Response

```http
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjM3YzY2MjEtZWVhNC00NzFkLWEzNjktYWQ1ZjViMzU3NTE2IiwiaWF0IjoxNjU3MTE1NDg4LCJleHAiOjE2NTcyMDE4ODh9.qQwzD5SMQ0yE-xAaeNlSOMHKtjtby722M4qTwKjsWvM",
    "data": {
        "username": "deslol",
        "email": "mohitscience123@gmail.com"
    }
}
```



## Run Locally

Clone the project

```bash
  git clone https://github.com/lolzone13/social-media-app-backend.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Contributing

Contributions are always welcome!

See [`contributing.md`](https://github.com/lolzone13/social-media-app/blob/main/docs/CONTRIBUTING.md) for ways to get started.



