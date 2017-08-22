# mongoose-crud

### Usage
1. Install required npm(s)
  * `npm install`
2. Run the app by entering following into command line
  * `npm start`  or  `nodemon app.js`
3. This app use **mongo** for database and **mongoose** for ODM.


### Routes
|   ***Route***  | ***HTTP*** | ***Description***              |
|----------------|:----------:|--------------------------------|
|`/books`|POST|Add new book entry (Document)|
|`/books`|GET|View all books|
|`/books/:id`|GET|View book by id|
|`/books/:id`|PUT|Edit (update) one book|
|`/books/:id`|DELETE|Remove one book entry (document)|
|`/customers`|POST|Add new customer|
|`/customers`|GET|View all customer|
|`/customers/:id`|GET|View customer by id|
|`/customers/:id`|PUT|Edit (update) one customer|
|`/customers/:id`|DELETE|Remove one customer entry (document)|
|`/transactions`|POST|Add new transaction|
|`/transactions/:id`|POST|Insert new detail into an existing transaction|
|`/transactions`|GET|View all transactions|
|`/transactions/:id`|GET|View transaction by id|
|`/transactions/:id`|DELETE|Remove one transaction|
