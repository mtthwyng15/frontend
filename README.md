# Packform1

This is a frontend application that displays the records of customers and their orders.
The reason for splitting this and backend application is because of best practises and for scalability and maintainability.

# Pre-requisites

- [NodeJS](https://nodejs.org/en/)

## Assumptions

- NodeJS has been installed
- the backend server is up and running on `localhost:4000/`

## Usage

- To start the frontend

```bash
npm install
npm start
```

- Use any browser to access the [application](localhost:3000/)

### Configure backend

- Modify the `proxy` value in `package.json` file to match the backend `address` and `port`

## Todo/Known issues

- Due to time constraint, I wasn't able to do the following
- date sorting
- date filtering
- search filter only filters the current page
