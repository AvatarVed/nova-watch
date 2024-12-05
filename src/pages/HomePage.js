import React, { useState } from "react";
import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import AccidentCard from "../components/AccidentCard";
import NotificationButton from "../components/NotificationButton";
import { accidentData } from "../utils/data";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(accidentData);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setFilteredData(
      accidentData.filter((item) =>
        item.location.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div>
      <NotificationButton />
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <Filters onFilter={(data) => setFilteredData(data)} />
      <div>
        {filteredData.map((item) => (
          <AccidentCard key={item.id} accident={item} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
