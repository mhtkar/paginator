## Paginator

A small library to get pagination numbers for each page of your websites.

### How to use

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
paginator(100,6,5,5)

// returns [ 4, 5, 6, 7, 8 ]
```

all arguments must be numbers
