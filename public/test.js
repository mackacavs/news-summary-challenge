class News {
  constructor() {
  }

  async getNews() {
    const response = await fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=debates");
    const myJson = await response.json()
      .then(data => {
        data = JSON.stringify(data)
        console.log(data)
      })

  }
}


document.getElementById('submit').addEventListener('click', (e) => {
  let news = new News
  news.getNews()
  document.getElementById('news').innerHTML = news.getNews()
  e.preventDefault();
})