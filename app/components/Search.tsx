"use client";
import { useState, useEffect, useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface SearchBarProps<T> {
  placeholder?: string;
  onSelect?: (item: T) => void;
  // Professional addition: Optional async fetch for global search
  fetcher?: (query: string) => Promise<T[]>;
  // For local filtering
  data?: T[];
  displayFn: (item: T) => string;
}

export default function SearchBar<T>({
  placeholder = "Search...",
  onSelect,
  fetcher,
  data,
  displayFn,
}: SearchBarProps<T>) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<T[]>([]);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // Handle Search Logic
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (!query.trim()) {
        setSuggestions([]);
        return;
      }

      if (fetcher) {
        // GLOBAL WAY: Fetch from API
        const results = await fetcher(query);
        setSuggestions(results);
      } else if (data) {
        // LOCAL WAY: Filter existing prop
        const filtered = data.filter((item) =>
          displayFn(item).toLowerCase().includes(query.toLowerCase()),
        );
        setSuggestions(filtered);
      }
    }, 300); // 300ms Debounce

    return () => clearTimeout(delayDebounceFn);
  }, [query, data, fetcher]);

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
        />
        {/* Search Icon */}
        <div className="absolute left-3 top-2.5 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-200 shadow-2xl rounded-lg w-full mt-2 max-h-72 overflow-y-auto z-[100] divide-y divide-gray-100">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                onSelect?.(item);
                setQuery("");
                setSuggestions([]);
              }}
              className="px-4 py-3 hover:bg-red-50 cursor-pointer flex flex-col transition-colors"
            >
              <span className="font-medium text-gray-800">
                {displayFn(item)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
