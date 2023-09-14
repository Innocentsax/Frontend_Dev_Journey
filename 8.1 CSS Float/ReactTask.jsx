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
