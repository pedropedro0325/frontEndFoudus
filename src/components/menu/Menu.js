import React from 'react';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
export default function Menu() {
  return (
    <div className="container">
    <div className="header">
     <center> Menu </center>
    </div>
    <div className="content">
    <div className="form">
    <div className="fouter">
      <Link to="/insertion">
     <Button type="button" className="btn">Insert</Button>
     </Link>{'     '}
     <Link to="/affichage">
     <Button type="button" className="btn">Afficher</Button>
     </Link>{'     '}
    </div>
    </div>
    </div>
    </div>
  );
}
