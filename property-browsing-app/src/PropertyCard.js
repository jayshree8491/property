import React from 'react';
import aImage from './images/a.jpeg';
import bImage from './images/b.jpeg';
import './propertyCard.css'

function PropertyCard({ property }) {

  console.log('Image URL:', `./images/${property.image}`);
  
  return (
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card">
        <img src={property.image === 'a.jpeg' ? aImage : bImage} alt={property.name} className="card-img-top" />
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
