import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    // Handle delete button
    if (value === 'Del') {
      setInput(input.slice(0, -1));
    } 
    // Handle OK button for calculation
    else if (value === 'OK') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
        setTimeout(() => setInput(''), 1500); // Clear input after showing error
      }
    } 

  
    // Append value for other buttons
    else {
      // Prevent consecutive operators
      if (/[\+\-\*\/]$/.test(input) && /[\+\-\*\/]/.test(value)) {
        return;
      }

      if(input[0]=== '*' || input[0] === '/'){
        setInput(input)
    }else{
        setInput(input + value);
    }
     
    }
  };

  return (
    <div className="w-80 h-auto p-6 bg-gray-800 rounded-lg shadow-lg">
      <input
        type="text"
        className="w-full h-12 text-3xl text-white bg-gray-900 p-4 rounded mb-4"
        value={input}
        placeholder="0"
        readOnly
      />
      <div className="w-full grid grid-cols-4 gap-4">
        {[
          ['1', '2', '3', '-'],
          ['4', '5', '6', '+'],
          ['7', '8', '9', '/'],
          ['0', '*', 'Del', 'OK']
        ].map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((btnValue) => (
              <button
                key={btnValue}
                type='button'
                className={`w-full h-16 text-2xl text-white bg-gray-700 p-4 rounded flex justify-center items-center transition-transform transform hover:scale-105 ${btnValue === 'Del' ? 'bg-red-600' : ''} ${btnValue === 'OK' ? 'bg-blue-700' : ''}`}
                onClick={() => handleButtonClick(btnValue)}
              >
                {btnValue}
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
