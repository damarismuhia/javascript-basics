const global = {
    currentPage: window.location.pathname,
    baseUrl: 'https://api.themoviedb.org/3/'
}


function formatWithCommas(amount) {
  return `$${new Intl.NumberFormat('en-US').format(amount)}`;
}
