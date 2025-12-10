# Deployment Guide for Shabu Desu

The "Black Screen" issue occurs because browsers cannot run the source code (`.tsx` files) directly. You must serve the **built** version of the application.

## 1. Build the Application (Already Done)
I have already generated the production build for you. 
The files are located in:
`D:\laragon\www\shabu\dist`

This folder contains:
- `index.html` (The entry point)
- `assets/` (Compiled JavaScript and CSS)
- Other static files

## 2. Upload to cPanel
1.  Open your cPanel File Manager.
2.  Navigate to the document root for **shabu.verranet.com** (usually `public_html` or `shabu.verranet.com` folder).
3.  **Delete** the existing files (like `src`, `node_modules`, `vite.config.ts`, etc.) from that server folder. You do NOT want source code there.
4.  **Upload** the **contents** of the local `dist` folder to that server folder.
    - You should see `index.html` and an `assets` folder directly in the document root.

## 3. Verify
Visit [https://shabu.verranet.com](https://shabu.verranet.com). The site should load correctly.

## Future Deployments
Whenever you make changes:
1.  Run `npm run build` in your terminal.
2.  Upload the *new* contents of `dist` to the server.
