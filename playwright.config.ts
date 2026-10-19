import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npx astro preview --port 4321',
    port: 4321,
    reuseExistingServer: true,
    timeout: 120000,
  },
  projects: [
    {
      name: 'Mobile-360x800',
      use: {
        viewport: { width: 360, height: 800 },
        isMobile: true,
      },
    },
    {
      name: 'Mobile-390x844',
      use: {
        viewport: { width: 390, height: 844 },
        isMobile: true,
      },
    },
    {
      name: 'Tablet-768x1024',
      use: {
        viewport: { width: 768, height: 1024 },
      },
    },
    {
      name: 'Desktop-1440x900',
      use: {
        viewport: { width: 1440, height: 900 },
      },
    },
  ],
});
