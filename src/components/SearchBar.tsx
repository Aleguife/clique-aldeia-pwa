
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useBusinessData } from '@/hooks/useBusinessData';

interface SearchBarProps {
  variant?: 'hero' | 'page';
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ variant = 'hero', className = '' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { businesses } = useBusinessData();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Filter suggestions based on search term
  const suggestions = searchTerm.length > 1 
    ? businesses
        .filter(business => 
          business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          business.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 5)
    : [];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        handleSuggestionClick(suggestions[selectedIndex].name);
      } else {
        handleSearch();
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHeroVariant = variant === 'hero';

  return (
    <div className={`relative w-full ${className}`}>
      <div className="flex w-full">
        <div className="relative flex-1 min-w-0">
          <Search className={`absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 ${isHeroVariant ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-4 h-4'}`} />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Buscar estabelecimentos..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
              setSelectedIndex(-1);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            className={`
              ${isHeroVariant 
                ? 'pl-12 sm:pl-14 pr-3 sm:pr-4 py-4 sm:py-5 text-base sm:text-lg rounded-l-xl sm:rounded-l-2xl border-r-0 focus:ring-2 focus:ring-white/20 h-12 sm:h-14' 
                : 'pl-10 pr-4'
              }
              ${isHeroVariant ? 'rounded-r-none' : ''}
              w-full
            `}
          />
        </div>
        <Button
          onClick={handleSearch}
          className={`
            ${isHeroVariant 
              ? 'bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg rounded-l-none rounded-r-xl sm:rounded-r-2xl border-l-0 h-12 sm:h-14 shrink-0' 
              : 'rounded-l-none shrink-0'
            }
          `}
          size={isHeroVariant ? 'lg' : 'default'}
        >
          <span className="hidden sm:inline">Buscar</span>
          <Search className="w-4 h-4 sm:hidden" />
        </Button>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 w-full"
        >
          {suggestions.map((business, index) => (
            <div
              key={business.id}
              className={`
                px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0
                ${selectedIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'}
              `}
              onClick={() => handleSuggestionClick(business.name)}
            >
              <div className="flex items-center space-x-3">
                <Search className="w-4 h-4 text-gray-400 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-gray-900 truncate">{business.name}</div>
                  <div className="text-sm text-gray-500 truncate">{business.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
