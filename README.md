# Papara Wallet App

A modern digital wallet application built with Vue 3, featuring PWA support for a native app-like experience.

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vite 7** - Next-generation frontend build tool
- **Pinia** - State management
- **Vue Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Chart.js + vue-chartjs** - Data visualization
- **Lucide Icons** - Beautiful icons
- **PWA** - Progressive Web App support via `vite-plugin-pwa`

## Prerequisites

- **Node.js** `^20.19.0` or `>=22.12.0`
- **npm** (comes with Node.js)

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd wallet-app

# Install dependencies
npm install
```

## Running Locally

### Development Server

```bash
npm run dev
```

The app will be available at:
- **Local:** http://localhost:5173
- **Network:** http://your-ip:5173 (for mobile testing)

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint and fix files |
| `npm run format` | Format code with Prettier |

## PWA Testing on Mobile

> **Important:** PWAs require HTTPS to work on mobile devices.

### Option 1: Using ngrok (Recommended)

```bash
# Install ngrok globally
npm install -g ngrok

# Start dev server
npm run dev

# In another terminal, create HTTPS tunnel
ngrok http 5173
```

After ngrok starts, you'll get a URL like `https://xxxxx.ngrok-free.app`. You need to add this to Vite's allowed hosts:

1. Open `vite.config.js`
2. Add your ngrok URL to the `allowedHosts` array:

```javascript
server: {
  host: true,
  allowedHosts: ['your-subdomain.ngrok-free.app']
}
```

3. Restart the dev server
4. Use the `https://xxxxx.ngrok-free.app` URL on your mobile device

### Option 2: Deploy to Production

Deploy the `dist` folder to Vercel, Netlify, or any HTTPS-enabled hosting.

### Adding to Home Screen

- **iOS:** Safari → Share → Add to Home Screen
- **Android:** Chrome → Menu (⋮) → Install app / Add to Home Screen

## Project Structure

```
wallet-app/
├── public/              # Static assets (icons, manifest.json)
├── src/
│   ├── assets/          # Images, fonts
│   ├── components/      # Vue components
│   ├── composables/     # Vue composables
│   ├── router/          # Vue Router config
│   ├── stores/          # Pinia stores
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   ├── main.js          # Entry point
│   └── style.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json
```

## IDE Setup

- **VS Code** with [Vue Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension
- Disable Vetur if installed

## Notes

- The app is designed as a mobile-first PWA
- Theme color: `#0D0D0D` (dark theme)
- Supports offline functionality via service worker
- Uses Turkish language (`lang="tr"`) by default

## License

Private - All rights reserved
