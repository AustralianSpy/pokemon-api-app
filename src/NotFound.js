import React from "react";
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="NotFound">
      <h1>You might be lost!</h1>
      <Link to='/'>Go back home.</Link>
    </div>
  );
}

export default NotFound;