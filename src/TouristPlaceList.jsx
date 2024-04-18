import React from 'react';
import TouristPlace from './TouristPlace'; // Update the import statement
import './index.css';

const TouristPlaces = [
  {
    name: 'Phurli-Jharan Waterfall',
    description:
      'A natural waterfall nestled in the lush greenery of the forest.',
    location:
      'Approximately 16 kilometers from Bhawanipatna, on Highway-44, Bhawanipatna, Kalahandi, Odisha, India',
    visitingHours: '9.00 AM - 6.00 PM',
    admissionFee: '20 INR',
    imageUrl:
      'https://lh3.googleusercontent.com/-uklnf17f3Kw/X5GICsLHmaI/AAAAAAAAHnI/owPXtLxfCOAm8PqUbLfon8qsy-cTC9C9wCLcBGAsYHQ/s1600/1603373063064046-0.png',
  },

  {
    name: 'Bhagirathi Park',
    description:
      'A serene park located in the heart of Bhawanipatna, offering lush greenery, walking paths, and recreational facilities.',
    location:
      'Approximately 18 kilometers from Bhawanipatna,Near Bhatang Padar, Bhawanipatna, Kalahandi, Odisha, India. ',
    visitingHours: '9:00 AM - 6.00 PM',
    admissionFee: '20INR',
    imageUrl: 'https://pbs.twimg.com/media/DLC_JPXUMAEgJcI.jpg',
  },

  {
    name: 'Rabandhar Waterfall',
    description:
      'An Ecotourism center along with a picturesque waterfall cascading down the rocky cliffs, surrounded by dense forests and offering a refreshing natural swimming pool at its base.',
    location: 'Near Bhatang Padar, Bhawanipatna, Kalahandi, Odisha, India. ',
    visitingHours: '9:00 AM - 6.00 PM',
    admissionFee: '20 INR',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/0/06/Rabandhara_Waterfall%2C_Kalahandi.jpg',
  },
];

const TouristPlaceList = () => {
  // Change the component name here
  return (
    <div className="container">
      <h1>Tourist Places of Bhawanipatna</h1>
      {TouristPlaces.map((place, index) => (
        <TouristPlace key={index} {...place} />
      ))}
    </div>
  );
};

export default TouristPlaceList; // Change the export name here
