# Case Warp1 - Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Requirements

- Node.js 18+
- Modern browser (Chrome, Firefox, Safari, Edge)
- Background image at `public/background_image.jpg`

## Compatibility Notes

✅ **Sound effects**: Use Web Audio API with fallback (`webkitAudioContext` for Safari). Works on all modern browsers and MacBooks.

✅ **Fonts**: Loaded from Google Fonts (requires internet connection on first load).

✅ **Cross-platform**: Works identically on any MacBook - no platform-specific code.

## Troubleshooting

- **No sound?** Check browser/system volume. Web Audio API requires user interaction first (click anywhere).
- **Fonts not loading?** Ensure internet connection for initial Google Fonts download.
