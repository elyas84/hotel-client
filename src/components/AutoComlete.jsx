import React, { useState } from "react";

export default function AutoComlete({ placeholder,arrayList }) {
  // Sample data (you could fetch this from an API)
  const suggestions = [
    "Paris",
    "London",
    "Rome",
    "Tokyo",
    "Stockholm",
    "Oslo",
    "Berlin",
    "Madrid",
    "Barcelona",
    "Istanbul",
  ];

  // State for input value and filtered suggestions
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // To toggle suggestions visibility

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Filter suggestions based on input
    if (value.length > 0) {
      const filtered = arrayList.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsOpen(true);
    } else {
      setFilteredSuggestions([]);
      setIsOpen(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion); // Set input to selected suggestion
    setFilteredSuggestions([]); // Clear suggestions
    setIsOpen(false); // Hide dropdown
  };

  // Handle clicking outside to close suggestions
  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 100); // Delay to allow click to register
  };
  return (
    <div>
      <div style={{ position: "relative", width: "300px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          style={{ width: "100%", padding: "8px", fontSize: "16px" }}
        />
        {isOpen && filteredSuggestions.length > 0 && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              border: "1px solid #ccc",
              position: "absolute",
              top: "100%",
              width: "100%",
              backgroundColor: "#fff",
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: 1,
            }}
          >
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  borderBottom: "1px solid #eee",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#f0f0f0")
                }
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
