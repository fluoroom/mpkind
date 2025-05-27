# MPKind

MPKind is a lightweight, web-based MPD (Music Player Daemon) client interface specifically optimized for Kindle devices. It provides a simple, touch-friendly interface to control your MPD server from your Kindle's browser.

## Features

- 🎵 Full MPD playback control (play/pause, next/previous, volume)
- 📱 Kindle-optimized interface with touch controls
- 🎨 Clean, minimal design with high contrast
- 🔒 Basic authentication for security
- 🖼️ Album cover art display
- ⚡ Fast and responsive interface
- 🔄 Configurable update rate for real-time playback status

## Prerequisites

- A running MPD server
- Node.js 18+ installed
- An E-reader device with a web browser

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MPD_HOST=localhost        # Your MPD server host
MPD_PORT=6600            # Your MPD server port
MPD_PASSWORD=            # Your MPD password (if set)
MUSIC_DIRECTORY=/path/to/your/music  # Path to your music library
HTTP_USER=admin          # Username for web interface
HTTP_PASSWORD=your_password  # Password for web interface
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mpkind.git
cd mpkind
```

2. Install dependencies:
```bash
npm install
```
3. Edit mpkind.service to your needs and install it:
```bash
sudo cp ./mpkind.service /etc/systemd/system/mpkind.service
```
4. Build & Run the application:
```bash
npm run buildstall
```
[see package.json](/package.json)

5. Start the server:
```bash
npm start
```

The application will be available at `http://your-server:8600`

## Development

To run the development server:

```bash
npm run dev
```

This will start the server on port 8600. Open [http://localhost:8600](http://localhost:8600) in your browser to see the result.

## Systemd Service

A systemd service file is included for running MPKind as a service. To install:

1. Copy the `mpkind.service` file to `/etc/systemd/system/`
2. Update the paths and user in the service file
3. Enable and start the service:

```bash
sudo systemctl enable mpkind
sudo systemctl start mpkind
```

