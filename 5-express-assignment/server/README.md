
# Express Server

  - Express based node server serving data
  - Middlewares
    - [CORS](https://github.com/expressjs/cors#readme) - connection handling
    - [Morgan](https://github.com/expressjs/morgan#readme) - server logging

### Morgan configs

**dev**

Concise output colored by response status for development use. The :status token will be colored green for success codes, red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for information codes.

`:method :url :status :response-time ms - :res[content-length]`

**short**

Shorter than default, also including response time.

`:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms`

**tiny**

The minimal output.

`:method :url :status :res[content-length] - :response-time ms`
