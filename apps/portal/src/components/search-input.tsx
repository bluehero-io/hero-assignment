"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SearchInputProps = {
  initialQuery: string;
  placeholder?: string;
};

export function SearchInput({ initialQuery, placeholder = "Search listings" }: SearchInputProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(initialQuery);
  const [debouncedValue, setDebouncedValue] = useState(initialQuery);
  
  const isUpdatingUrlRef = useRef(false);
  const lastUrlQueryRef = useRef(initialQuery);
  const isInitialMountRef = useRef(true);

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => {
      clearTimeout(handle);
    };
  }, [value]);

  useEffect(() => {
    if (isUpdatingUrlRef.current) {
      isUpdatingUrlRef.current = false;
      return;
    }

    const urlQuery = searchParams.get("q") || "";
    const currentValue = value.trim();
    
    if (urlQuery !== lastUrlQueryRef.current && urlQuery !== currentValue) {
      setValue(urlQuery);
      lastUrlQueryRef.current = urlQuery;
    } else {
      lastUrlQueryRef.current = urlQuery;
    }
  }, [searchParams, value]);

  useEffect(() => {
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      lastUrlQueryRef.current = debouncedValue;
      return;
    }

    const currentUrlQuery = searchParams.get("q") || "";
    const trimmedDebounced = debouncedValue.trim();
    
    if (trimmedDebounced === currentUrlQuery) {
      return;
    }

    isUpdatingUrlRef.current = true;
    lastUrlQueryRef.current = trimmedDebounced;

    const nextParams = new URLSearchParams(searchParams.toString());
    if (trimmedDebounced) {
      nextParams.set("q", trimmedDebounced);
    } else {
      nextParams.delete("q");
    }
    const queryString = nextParams.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(newUrl, { scroll: false });
  }, [debouncedValue, router, pathname, searchParams]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setValue(nextValue);
  }, []);

  return (
    <input
      type="search"
      name="q"
      aria-label="Search listings"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
    />
  );
}
