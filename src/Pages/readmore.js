import React from 'react';
import Header from '../Assets/Header.js';

export default function Readmore() {
  // Replace 'your_image_url' with the actual URL of your image
  const imageUrl = 'https://preview.redd.it/mfza6arztme21.jpg?auto=webp&s=5cd3756e7506d12a62f8bebf7b9b52c20a9f115c';

  return (
      <div className="desktop-padding">
        {/* Use the <img> tag to display the image */}
        <img src={imageUrl} alt="Readmore Image" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}
