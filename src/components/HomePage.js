import React from 'react';
import { Link } from 'react-router-dom';

  const HomePage = () => {

    return (
      <div>

        <h2>Index Page</h2>
        <ol>
          <li>Review the <Link to="/fuel-savings">demo app</Link></li>
          <li>Remove the demo and start coding: npm run remove-demo</li>
        </ol>
      </div>
    );

};

 export default HomePage;