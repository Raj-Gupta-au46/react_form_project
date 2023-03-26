
import React, { useState,PureComponent } from "react";



const handleButtonClick = (buttonName) => {
    const clickTime = new Date();
    setButtonClicks([...buttonClicks, { buttonName, clickTime }]);
  };

export class Buttontask extends PureComponent {
    
  render() {

    return (
        <div>
        <button onClick={() => handleButtonClick("ButtonA")}>ButtonA</button>
        <button onClick={() => handleButtonClick("ButtonB")}>ButtonB</button>
        <button onClick={() => handleButtonClick("ButtonC")}>ButtonC</button>
        <button onClick={() => handleButtonClick("ButtonD")}>ButtonD</button>
      </div>
    )
  }
}


function ButtonClickTable() {
    const [buttonClicks, setButtonClicks] = useState([]);
  
    const handleButtonClick = (buttonName) => {
      const clickTime = new Date();
      setButtonClicks([...buttonClicks, { buttonName, clickTime }]);
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Button Name</th>
              <th>Click Time</th>
            </tr>
          </thead>
          <tbody>
            {buttonClicks.map((click, index) => (
              <tr key={index}>
                <td>{click.buttonName}</td>
                <td>{click.clickTime.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={() => handleButtonClick("ButtonA")}>ButtonA</button>
          <button onClick={() => handleButtonClick("ButtonB")}>ButtonB</button>
          <button onClick={() => handleButtonClick("ButtonC")}>ButtonC</button>
          <button onClick={() => handleButtonClick("ButtonD")}>ButtonD</button>
        </div>
      </div>
    );
  }
  
  export default ButtonClickTable;
  
  
  
