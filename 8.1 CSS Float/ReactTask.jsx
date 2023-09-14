/*Question 1
====> <=====
Complete the React application below (25 points)
Implement logic to track clicks that increments when the <button> element it is clicked.
Populate the
tag with the current click count

if the click count is > 3 return the count to 0.
```
import React, { useState } from "react";
export default function Clicker() {

function handleClick() {
//implement handleClick function
}

return (
<React.Fragment>
{/use state change here/}


<form>
<button
type="button"
onClick={handleClick}
className="counter-button"
    >Click me</button>
  </form>
</React.Fragment>
);
};
``` */

import React, { useState } from "react";

export default function Clicker() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount >= 3) {
      // Reset the count to 0 if it exceeds 3
      setClickCount(0);
    } else {
      // Increment the click count
      setClickCount(clickCount + 1);
    }
  };

  return (
    <React.Fragment>
      <div>
        <button
          type="button"
          onClick={handleClick}
          className="counter-button"
        >
          Click Me
        </button>
      </div>
      <div>
        <p>Click Count: {clickCount}</p>
      </div>
    </React.Fragment>
  );
}

=====> Question 2 <====
/*

What is the Virtual DOM? (10 points)

How does React determine when to update a component, explain? (15 points)

Virtual DOM is a concept in React that acts as an intermediary layer between 
your JavaScript code and the actual browser DOM. 

React determines when to update a component by comparing the Virtual DOM with 
the previous version. It updates the real DOM only when it identifies differences due 
to state, props, or other triggers, making updates efficient and responsive.
3.
A React Hook allows us to encapsulate logic into a separate hook(function) so that it can be reusued in different components.

Create a custom hook called useTimer that returns the seconds since the hook was rendered. (25 points)

Hint: Leverage setInterval or setTimeout in useEffect for this.

Imagine that your hook would be used as shown in the component below.

function TimerInMinutes() {
  const seconds = useTimer();

  const minutes = Math.trunc(seconds / 60);

  return (
    <>
      <p>Minutes: {minutes}</p>
      <p>time: {seconds}</p>
    </>
  )
}
*/
import { useState, useEffect } from 'react';

function useTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000); 

    return () => {
      clearInterval(timer); 
    };
  }, []);

  return seconds;
}

// Component TimerInMinutes
function TimerInMinutes() {
  const seconds = useTimer();
  const minutes = Math.trunc(seconds / 60);

  return (
    <div>
      <p>Minutes: {minutes}</p>
      <p>Time: {seconds}</p>
    </div>
  );
}

export default TimerInMinutes;
