import React from 'react';
import CourseNav from '../components/CourseNav';
import fullstackImage from '../assets/fullstack.jpg';
import './FullStack.css';

const fullStackArticles = [
  { id: 1, title: 'Full Stack', image: fullstackImage },
  //{ id: 2, title: 'Full Stack Article 2', image: fullstackImage },
  //{ id: 3, title: 'Full Stack Article 3', image: fullstackImage },
];

function FullStack() {
  return (
    <div>
      <CourseNav />
      <div className="articles">
        {fullStackArticles.map(article => (
          <div key={article.id} className="article">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FullStack;
