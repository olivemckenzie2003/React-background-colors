import React, { useState } from 'react';

const SelectColor = () => {
  // Define an array of predefined colors
  const colors = [
    '#FF5733', // Red
    '#33FF57', // Green
    '#3357FF', // Blue
    '#FF33A6', // Pink
    '#FFD633', // Yellow
  ];

  // State to track the selected color
  const [selectedColor, setSelectedColor] = useState(null);

  // Function to handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="color-picker"   style={{backgroundColor: selectedColor}}>
      <h2>Color Picker</h2>
      <div className="color-buttons">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
            
          >
            {selectedColor === color ? 'Selected' : 'Select'}
          </button>
        ))}
      </div>
      {selectedColor && (
        <p>Selected color: <span style={{ color: selectedColor }}>{selectedColor}</span></p>
      )}
      <style jsx>{`
        .color-picker {
          padding: 20px;
          border: 1px solid #ccc;
          background-color: #f9f9f9;
        }
        .color-buttons {
          display: flex;
          gap: 10px;
        }
        button {
          border: none;
          cursor: pointer;
          padding: 10px;
          border-radius: 5px;
          font-weight: bold;
          color: white;
        }
        span {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default SelectColor;
