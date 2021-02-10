import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

//1. Create Entry Component
//2. create props to replace hard coded data
//3a. import te emojipedia const.
//3. map throguh the emojipedia array and render Entry components

function createdEntry(emojs) {
  return (
    <Entry
      key={emojs.id}
      emoji={emojs.emoji}
      name={emojs.name}
      meaning={emojs.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createdEntry)}
    </div>
  );
}

export default App;
