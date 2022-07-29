let news = {
  apiKey: "cff49caa5c7c4d45a1140cee46434814",
  news: {},
  articleCounter: 0,

  fetchNews() {
    fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="
        + this.apiKey
      )
      .then((response) => response.json())
      .then((data) => {
        this.news = data
        this.displayNews()
      });   
  },

  displayNews() {
    const totalResults = this.news;
    for (let i = this.articleCounter; i < this.articleCounter + 1; i++){
      document.querySelectorAll(".title")[i].innerText = totalResults.articles[i].title;
      document.querySelectorAll(".name")[i].innerText = totalResults.articles[i].source.name;
      document.querySelectorAll(".buttonLink")[i].setAttribute('href',totalResults.articles[i].url)
      document.querySelectorAll(".imageLink")[i].setAttribute('href',totalResults.articles[i].urlToImage)
    }
  },   

  updateNews(){
    news.articleCounter += 2;
    for (let i = news.articleCounter; i < news.articleCounter + 1; i++){
      const articles = news.news.articles
      document.querySelectorAll(".title")[i % 2].innerText = articles[i].title;
      document.querySelectorAll(".name")[i % 2].innerText = articles[i].source.name;
      document.querySelectorAll(".buttonLink")[i % 2].setAttribute('href',articles[i].url)
      document.querySelectorAll(".imageLink")[i % 2].setAttribute('href', articles[i].urlToImage)
    }

  }
}





news.fetchNews();
document.querySelector('#load-more').addEventListener('click', news.updateNews)
