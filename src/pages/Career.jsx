import React from 'react';
import CourseNav from '../components/CourseNav';
import careerImage from '../assets/career.jpg';
import './Career.css';

const careerArticles = [
  { id: 1, title: 'Career', image: careerImage },
  //{ id: 2, title: 'Career Article 2', image: careerImage },
  //{ id: 3, title: 'Career Article 3', image: careerImage },
];

function Career() {
  return (
    <div>
      <CourseNav />
      <div className="articles">
        {careerArticles.map(article => (
          <div key={article.id} className="article">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Career;
