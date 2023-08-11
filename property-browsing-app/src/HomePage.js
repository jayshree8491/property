import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import mockProperties from './mockData';

function HomePage() {
  const [properties, setProperties] = useState(mockProperties);


   /* useEffect(() => {
      // Fetch property data from the API
      const apiKey = '807d7070b03d6a01beea342eee52471d'; // Replace with your actual API key
      const headers = {
        'accept': 'application/json',
        'apikey': apiKey
      };
    
      // Fetch property data from the API
      axios.get('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/basicprofile?address1=4529%20Winona%20Court&address2=Denver%2C%20CO', { headers })
      .then(response => {
        console.log('API Response:', response.data);  // Handle the API response data
        // Access the property data from the API response
        const apiProperties = response.data.property;
        console.log('Mapped Properties:', apiProperties);
      
        // Map the API properties to match your app's property structure
        const formattedProperties = apiProperties.map(apiProperty => {
          const rent = apiProperty.rent_amount ? `$${apiProperty.rent_amount}` : 'N/A';
        const security = apiProperty.security_deposit ? `$${apiProperty.security_deposit}` : 'N/A';
      const reviews = apiProperty.average_reviews ? apiProperty.average_reviews.toString() : 'N/A';
        
        return {
          name: apiProperty.property_name,
          rent: rent,
          location: apiProperty.property_location,
          reviews: reviews,
          security: security,
          image: apiProperty.property_image_url
          };
        });

          console.log('Formatted Properties:', formattedProperties);
      
        setProperties(formattedProperties);
      
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }, []);
   */

    return (
      <div className="d-flex">
        {/* Sidebar */}
        <div className="bg-light border-end sidebar">
          {/* Sidebar content */}
          <div className="sidebar-header text-center py-4">
          <h3>Broki Real Estate</h3>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/listings" className="nav-link">Property Listings</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
          </li>
        </ul>
        <div className="sidebar-footer text-center py-4">
          <p>Contact us for all your real estate needs:</p>
          <p>Email: info@broki.in</p>
          <p>Phone: +1234567890</p>
        </div>
        </div>
  
        {/* Main content */}
        <div className="flex-grow-1 p-3">
          {/* Navigation bar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
              <a className="navbar-brand" href="/home">Property Browsing App</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
  
          {/* Property listings */}
          <div className="row">
            {properties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
        </div>
      </div>
    );
  
            }
  export default HomePage;
