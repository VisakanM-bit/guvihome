import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import { buildSearchIndex } from "../../data/siteContent";

function GlobalSearch({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const index = useMemo(() => buildSearchIndex(), []);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 8);
    return index
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          item.keywords?.toLowerCase().includes(q)
      )
      .slice(0, 12);
  }, [query, index]);

  const handleSelect = useCallback(
    (href) => {
      onClose();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    },
    [onClose]
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-start justify-center bg-slate-950/60 backdrop-blur-sm p-4 pt-[12vh]"
      role="dialog"
      aria-label="Global search"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-100">
          <FaSearch className="text-slate-400 shrink-0" aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, modules, projects, roles..."
            className="flex-1 text-sm outline-none text-jawa-primary placeholder:text-slate-400"
            aria-label="Search"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500"
            aria-label="Close search"
          >
            <FaTimes />
          </button>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto py-2" role="listbox">
          {results.length === 0 ? (
            <li className="px-4 py-6 text-sm text-slate-500 text-center">
              No results for &ldquo;{query}&rdquo;
            </li>
          ) : (
            results.map((item, i) => (
              <li key={`${item.type}-${item.title}-${i}`}>
                <button
                  type="button"
                  onClick={() => handleSelect(item.href)}
                  className="w-full text-left px-4 py-3 hover:bg-jawa-bg transition flex items-start gap-3"
                  role="option"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-jawa-secondary bg-green-50 px-2 py-0.5 rounded shrink-0 mt-0.5">
                    {item.type}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-jawa-primary">
                      {item.title}
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">
                      {item.desc}
                    </span>
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
        <p className="px-4 py-2 text-[11px] text-slate-400 border-t border-slate-100">
          Tip: Search programs, modules, projects, and career roles instantly
        </p>
      </div>
    </div>
  );
}

export default GlobalSearch;
