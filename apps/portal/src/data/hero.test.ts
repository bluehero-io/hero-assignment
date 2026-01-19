import { describe, expect, it } from "vitest";
import { getHeroListings } from "@/data/hero";


describe("hero listings", () => {
  it("returns localized listings", () => {
    const listings = getHeroListings("en");

    expect(listings.length).toBeGreaterThan(0);
    expect(listings[0]).toHaveProperty("id");
    expect(listings[0]).toHaveProperty("title");
  });
});
