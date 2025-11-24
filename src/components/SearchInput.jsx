"use client";
import { useCallback, useState } from "react";
import { Input } from "./Input";

export function SearchInput({ onChange, className }) {
  const [query, setQuery] = useState("");

  const debounceSearch = useCallback(
    debounce((value) => onChange?.(value), 300),
    []
  );

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    debounceSearch(value);
  }

  return (
    <Input
      className={className}
      value={query}
      onChange={handleChange}
      placeholder="Cari siswa..."
    />
  );
}

// Util: debounce
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}
