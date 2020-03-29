function paginator(
  totalPosts,
  currentPage,
  postsPerPage = 5,
  maximumPage
) {
  const tpn = Math.ceil(totalPosts / postsPerPage);

  const initArr = [];

  for (var i = 0; i < maximumPage; i++) {
    initArr.push(i);
  }

  const arr = initArr.reduce((ac, cv) => {
    const factor =
      maximumPage % 2 === 0
        ? Math.floor(maximumPage / 2) - 1
        : Math.floor(maximumPage / 2);
    const factor2 = currentPage + (cv - factor);
    const e = maximumPage - cv;
    if (factor2 > 0 && tpn >= factor2) {
      ac.push(factor2);
    } else if (factor2 <= 0) {
      e * 10 <= totalPosts ? ac.push(e) : ac.push();
    } else {
      ac[0] - e > 0 ? ac.push(ac[0] - e) : ac.push();
    }

    return ac;
  }, []);

  return arr.sort((a, b) => a - b);
}

module.exports = paginator