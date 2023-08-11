import React from 'react';
import aImage from './images/a.jpeg';
import bImage from './images/b.jpeg';

function PropertyCard({ property }) {

  console.log('Image URL:', `./images/${property.image}`);
  
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={property.image === 'a.jpeg' ? aImage : bImage} alt={property.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{property.name}</h5>
          <p className="card-text">
            Rent: {property.rent}<br />
            Location: {property.location}<br />
            Reviews: {property.reviews}<br />
            Security: {property.security}<br/>
            image:{property.image}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
