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

3. Edit mpkind.service to your needs and install it:
```bash
sudo cp ./mpkind.service /etc/systemd/system/mpkind.service
```
4. Run the application:
```bash
npm run buildstall
```
(see package.json)

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
