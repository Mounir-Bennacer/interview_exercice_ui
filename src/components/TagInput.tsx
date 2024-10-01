import React, { useState } from "react";

interface Props {
  onAddTag: (tag: string) => void;
}

const TagInput: React.FC<Props> = ({ onAddTag }) => {
  const [tag, setTag] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tag.trim()) {
      onAddTag(tag.trim());
      setTag("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex">
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="New tag"
          className="flex-grow px-4 py-2 rounded-l-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-cyan-500 text-white rounded-r-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          Add Tag
        </button>
      </div>
    </form>
  );
};

export default TagInput;
