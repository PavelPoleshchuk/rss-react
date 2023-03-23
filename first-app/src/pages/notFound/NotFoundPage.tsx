import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1 data-testid="not-found" style={{ fontSize: '100px' }}>
        404
      </h1>
      <h2>
        Page Not Found Go <Link to="/">Home Page</Link>
      </h2>
    </div>
  );
};

export default NotFoundPage;
