# Packform1

This is a front end application that displays the records of customers and their orders.
The reason for splitting this and back end application is because of best practises and for scalability and maintainability.

## Assumptions

- NodeJS has been installed
- the back end server is up and running on `localhost:4000/`

## Usage

- To start the front end

```bash
npm start
```

- To view the application, use `localhost:3000/` to run on any browser

### Configure back end

- Modify the `proxy` value in `package.json` file to match the back end `address` and `port`

## Todo/Known issues

- Due to time constraint, I wasn't able to do the following
- date sorting
- date filtering
- search filter only filters the current page
