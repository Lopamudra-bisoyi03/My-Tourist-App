import React from 'react';
import './index.css'; // Import the CSS file

const TouristPlace = ({
  name,
  description,
  location,
  visitingHours,
  admissionFee,
  imageUrl,
}) => {
  return (
    <div className="place">
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Location:</strong> {location}
      </p>
      <p>
        <strong>Visiting Hours:</strong> {visitingHours}
      </p>
      <p>
        <strong>Admission Fee:</strong> {admissionFee}
      </p>
    </div>
  );
};

export default TouristPlace;
