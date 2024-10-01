import React, { useState } from "react";

interface Props {
  onSearch: (tags: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTags, setSearchTags] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTags.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex">
        <input
          type="text"
          value={searchTags}
          onChange={(e) => setSearchTags(e.target.value)}
          placeholder="Search by tags (comma-separated)"
          className="flex-grow px-4 py-2 rounded-l-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-cyan-500 text-white rounded-r-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
