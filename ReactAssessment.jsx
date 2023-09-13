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


