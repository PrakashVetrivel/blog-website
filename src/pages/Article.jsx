import React from 'react';
import { useParams } from 'react-router-dom';

function Article() {
  const { id } = useParams();

  return (
    <div>
      <h2>Article {id}</h2>
      <p>This is a detailed view of the article.</p>
    </div>
  );
}

export default Article;
