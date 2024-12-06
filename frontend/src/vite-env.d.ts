/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_CLERK_PUBLISHABLE_KEY: string; // Declare the Clerk publishable key as a string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }