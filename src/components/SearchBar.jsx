import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      class="d-flex"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input 
        className="form-control me-2" type="search" 
        aria-label="Search"
        placeholder="City..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button class="btn btn-outline-success" type="submit">Add</button>
    </form>
  );
}
