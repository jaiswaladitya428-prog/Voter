"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "bn", label: "Bengali", native: "বাংলা" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
  { code: "te", label: "Telugu", native: "తెలుగు" },
  { code: "mr", label: "Marathi", native: "मराठी" },
  { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
  { code: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
  { code: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lang: typeof languages[0]) => {
    setSelected(lang);
    setIsOpen(false);

    if (lang.code === "en") {
      // Reset to English by clearing the cookie and reloading
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
      window.location.reload();
      return;
    }

    // Set Google Translate cookie
    const cookieValue = `/en/${lang.code}`;
    document.cookie = `googtrans=${cookieValue}; path=/`;
    document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;

    // Trigger translation via the hidden Google Translate select element
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    } else {
      // If select not ready yet, reload with cookie set
      window.location.reload();
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hidden Google Translate element — needed to power translations */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      {/* Custom Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-lg px-3 py-1.5 text-sm text-white font-medium"
        aria-label="Select Language"
      >
        <Globe size={15} />
        <span>{selected.native}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Custom Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-blue-50 transition-colors ${
                selected.code === lang.code ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-800"
              }`}
            >
              <span>{lang.native}</span>
              <span className="text-xs text-gray-400">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
