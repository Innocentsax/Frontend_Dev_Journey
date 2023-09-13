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



