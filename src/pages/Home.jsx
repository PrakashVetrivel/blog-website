import React from 'react';
import CourseNav from '../components/CourseNav';
import articleImage1 from '../assets/article1.jpg';
import articleImage2 from '../assets/article2.jpg';
import articleImage3 from '../assets/article3.jpg';
import './Home.css';

const articles = [
  { id: 1, title: 'Python Objects 101: How to', image: articleImage1 },
  { id: 2, title: 'Machine Learning Must-Know', image: articleImage2 },
  { id: 3, title: 'Unlocking the Power of NLP', image: articleImage3 },
];

function Home() {
  return (
    <div>
      <CourseNav />
      <div className="articles">
        {articles.map(article => (
          <div key={article.id} className="article">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
