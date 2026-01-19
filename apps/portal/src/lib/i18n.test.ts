import { describe, expect, it } from "vitest";
import { getMessages, getSafeLocale, isLocale, locales } from "@/lib/i18n";

describe("i18n", () => {
  it("exposes supported locales", () => {
    expect(locales).toContain("en");
    expect(locales).toContain("nl");
  });

  it("validates locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("nl")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });

  it("returns messages for a locale", () => {
    const messages = getMessages("en");

    expect(messages.nav.brand).toBeTypeOf("string");
    expect(messages.home.stats.length).toBeGreaterThan(0);
  });

  it("falls back to a safe locale", () => {
    expect(getSafeLocale("nl")).toBe("nl");
    expect(getSafeLocale("fr")).toBe("en");
    expect(getSafeLocale()).toBe("en");
  });
});
