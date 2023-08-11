import React from 'react';
import aImage from './images/a.jpeg';
import bImage from './images/b.jpeg';
import cImage from './images/c.jpeg';
import dImage from './images/d.jpeg';
import eImage from './images/e.jpeg';
import fImage from './images/f.jpeg';
import gImage from './images/g.jpg';
import hImage from './images/h.jpg';
import iImage from './images/i.jpeg';
import './propertyCard.css'

function PropertyCard({ property }) {

   const getImage = (imageName) => {
    switch (imageName) {
      case 'a.jpeg':
        return aImage;
      case 'b.jpeg':
        return bImage;
      case 'c.jpeg':
        return cImage;
      case 'd.jpeg':
        return dImage;
      case 'e.jpeg':
        return eImage;
       case 'f.jpeg':
        return fImage;
        case 'g.jpg':
          return gImage;

          case 'h.jpg':
        return hImage;
        case 'i.jpeg':
        return iImage;


      
      default:
        return null; // Handle default image or error case
    }
  };

  console.log('Image URL:', `./images/${property.image}`);
  
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img src={getImage(property.image)} alt={property.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{property.name}</h5>
          <p className="card-text">
            For Lease: {property.rent}<br />
            Location: {property.location}<br />
            Area(sq. feet): {property.Area}<br />
           
          </p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-primary">Talk to us</button>

            <button className="btn btn-success">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
