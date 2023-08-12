import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropertyCard from './PropertyCard';
import mockProperties from './mockData';
import './HomePage.css';

const propertiesPerPage = 3;

function HomePage() {
  const [properties, setProperties] = useState(mockProperties);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const endIndex = startIndex + propertiesPerPage;

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const displayProperties = properties.slice(startIndex, endIndex);


   
    return (
      <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar content */}
        <div className="sidebar-header">
          <h3>Broki Real Estate</h3>
        </div>
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item">
            <NavLink to="/home" className="sidebar-link">Home</NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink to="/listings" className="sidebar-link">Property Listings</NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink to="/about" className="sidebar-link">About Us</NavLink>
          </li>
          <li className="sidebar-nav-item">
            <NavLink to="/contact" className="sidebar-link">Contact Us</NavLink>
          </li>
        </ul>
        <div className="sidebar-footer">
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
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
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
          <div className="property-list">
            {displayProperties.map((property, index) => (
              <PropertyCard key={index} property={property} />
            ))}
          </div>
          <div className="pagination">
        <button
          className="pagination-button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
        </div>
      </div>
    );
  
            }
  export default HomePage;
