import React, { useState, useEffect } from "react";
import NewsCard from "./components/NewsCard";

import "./style/app.css";
import "./style/news_card.css";

import linkedin from "./media/linkedin.png";
import github from "./media/github.png";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=8758a5728d15478b951b5448b146a13e"
      );
      const data = await response.json();
      setNews(data["articles"]); //change the index for all the other news
    }
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Top news of the day</h1>
      </header>
      <div>
        {news.map((news, i) => (
          <NewsCard
            title={news.title}
            description={news.description}
            image={news.urlToImage}
          />
        ))}
      </div>

      <footer>
        <p>
          <img src={linkedin} alt="icon" />
          <a href="https://github.com/Gauravtripathii">Gauravtripathii</a>
        </p>

        <p>
          <img src={github} alt="icon" />
          <a href="https://www.linkedin.com/in/gaurav-kumar-tripathii/">
            Gauravtripathii
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
