"use client";
import { useState } from "react";
import Search from "../Search/Search";

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, sethSearchQuery] = useState("");
  return (
    <Search
      roomTypeFilter={roomTypeFilter}
      searchQuery={searchQuery}
      setRoomTypeFilter={setRoomTypeFilter}
      sethSearchQuery={sethSearchQuery}
    />
  );
};

export default PageSearch;
