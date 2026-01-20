"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    setValue(initialQuery);
  }, [initialQuery]);

  return (
    <input
      type="search"
      name="q"
      aria-label="Search listings"
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        const nextValue = event.target.value;
        setValue(nextValue);

        const nextParams = new URLSearchParams(searchParams.toString());
        if (nextValue.trim()) {
          nextParams.set("q", nextValue);
        } else {
          nextParams.delete("q");
        }
        const queryString = nextParams.toString();
        router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
      }}
      className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50"
    />
  );
}
