import { defineConfig, devices } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000";

const webServer = process.env.PLAYWRIGHT_BASE_URL
  ? undefined
  : {
      command: "sh -c 'cd apps/portal && pnpm dev'",
      url: baseURL,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
      env: {
        PORT: "3000"
      }
    };

export default defineConfig({
  testDir: "./tests",
  reporter: "list",
  use: {
    baseURL,
    trace: "on-first-retry"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ],
  webServer
});
