import React from "react";
import Movies from "./component/Movies";
import "./App.css";

export default function App() {
  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Movie List</span>
        </div>
      </nav>
      <Movies />
    </div>
  );
}
