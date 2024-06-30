import React from 'react';
import CourseNav from '../components/CourseNav';
import datasciImage from '../assets/datasci.jpg';
import './DataScience.css';

const dataScienceArticles = [
  { id: 1, title: 'Data Science', image: datasciImage },
  //{ id: 2, title: 'Data Science Article 2', image: datasciImage },
  //{ id: 3, title: 'Data Science Article 3', image: datasciImage },
];

function DataScience() {
  return (
    <div>
      <CourseNav />
      <div className="articles">
        {dataScienceArticles.map(article => (
          <div key={article.id} className="article">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataScience;
