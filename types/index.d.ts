//types
declare function paginator(
    totalPosts : number,
    currentPage :number,
    postsPerPage :number,
    maximumPage : number
  ) :number[]

export = paginator