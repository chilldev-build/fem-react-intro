import React from "react";
import "./App.css";
import { router } from "../node_modules/@reach/router";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";

function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <h1>Adopt Me!</h1>
        <router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </router>
      </div>
    </React.StrictMode>
  );
}

export default App;
