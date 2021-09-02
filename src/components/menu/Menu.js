import React from 'react';
import { Button } from 'react-bootstrap';
import Affichage from '../affichage/Affichage';
export default function Menu() {
  return (
    <div className="container">
    <div className="header">
      Menu
    </div>
    <div className="content">
    <div className="form">
    <div className="fouter">
       <Affichage/>
     <Button >Insert</Button>{'     '}
     <Button type="button" className="btn">Afficher</Button>{'  '}
     <Button type="button" className="btn">Supprimer</Button>{'  '}
     <Button type="button" className="btn">Mise à jour</Button>{'  '}

    </div>
    </div>
    </div>
    </div>
  );
}
