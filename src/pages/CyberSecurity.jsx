import React from 'react';
import CourseNav from '../components/CourseNav';
import cybersecImage from '../assets/cybersec.jpg';
import './CyberSecurity.css';

const cyberSecurityArticles = [
  { id: 1, title: 'Cyber Security', image: cybersecImage },
  //{ id: 2, title: 'Cyber Security Article 2', image: cybersecImage },
  //{ id: 3, title: 'Cyber Security Article 3', image: cybersecImage },
];

function CyberSecurity() {
  return (
    <div>
      <CourseNav />
      <div className="articles">
        {cyberSecurityArticles.map(article => (
          <div key={article.id} className="article">
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CyberSecurity;
