import { describe, expect, it } from "vitest";
import { getRoleListings } from "@/data/roles";

describe("role listings", () => {
  it("returns localized listings", () => {
    const listings = getRoleListings("en");

    expect(listings.length).toBeGreaterThan(0);
    expect(listings[0]).toHaveProperty("id");
    expect(listings[0]).toHaveProperty("title");
  });
});
