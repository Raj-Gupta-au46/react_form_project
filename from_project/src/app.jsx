import React, { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState(['']);

  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index] = event.target.value;
    setInputs(values);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <input
          key={index}
          value={input}
          onChange={(event) => handleInputChange(index, event)}
        />
      ))}
      <button onClick={handleAddInput}>AddMore</button>
    </div>
  );
}

export default App;