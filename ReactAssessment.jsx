=====> App.jsx <====
import React from "react";
import Badge from "./components/Badge";

export default function App() {
  return (
    <Badge
      user={{
        name: "Bond Akinmade",
        img: "https://avatars.githubusercontent.com/u/4683867",
        handle: "bondz"
      }}
      style={{
        width: 300,
        margin: "0 auto",
        border: "1px solid var(--biege-10)",
        borderRadius: 8,
        backgroundColor: "var(--charcoal)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        textAlign: "center"
      }}
      addFriend={() => alert("Added!")}
    />
  );
}

====> App.jsx <====
import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

function App(props) {
  return (
    <div id="app">
      <Counter />
    </div>
  );
}

export default App;



export default Counter;

=====> Bagde.jsx <====
import React from "react";

export default function Badge(props) {
  return (
    <div style={props.style}>
      <Avatar img={props.user.img} alt={props.user.name} />
      <div>
        <Name name={props.user.name} />
        <Handle handle={props.user.handle} />
        <button onClick={props.addFriend}>Add Friend</button>
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.img} alt={props.alt} />;
}

function Name(props) {
  return <h4>{props.name}</h4>;
}

function Handle(props) {
  return <p>@{props.handle}</p>;
}


====> counter.jsx <===
import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1 className="counter">{counter}</h1>
      <button className="decrement" type="button" onClick={decrementCounter}>
        Decrement
      </button>
      <button className="increment" type="button" onClick={incrementCounter}>
        Increment
      </button>
    </div>
  );
}



