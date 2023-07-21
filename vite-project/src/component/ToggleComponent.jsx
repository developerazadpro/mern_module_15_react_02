import React, { useState } from 'react';

// live test
/*
Question : Implement a toggle component using the useState hook. The toggle should display a button that toggles the visibility of a paragraph when clicked.

 

Instructions:

Please write the code for a functional component named ToggleComponent. This component should render a toggle  button and a paragraph. The paragraph should initially be hidden, and when the button is clicked, it should toggle its visibility.
*/

const ToggleComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div>
        <button onClick={toggleVisibility}>Toggle</button>
        {isVisible && <p>Learn with Ostad. Stay focused, keep going and change your life.</p>}
      </div>
    );
  };

export default ToggleComponent;