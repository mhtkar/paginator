## Paginator

A small library to get pagination numbers for each page of your websites.

### How to use

```sh
npm i paginate-number
```

```js
paginator(
    totalPosts ,
    currentPage ,
    postsPerPage ,
    maximumPage
  )
```
### example

```js
import paginator from 'paginate-number'

//for node js you can do 
//const paginator = require('paginate-number')

paginator(100,6,5,5)

// returns [ 4, 5, 6, 7, 8 ]
```

```js
//let's say to get 10 maximumPage

paginator(400,30,5,10)

// returns [ 26, 27, 28, 29, 30, 31, 32, 33, 34, 35 ]
```


all arguments must be numbers
