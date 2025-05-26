import './globals.css';

export const metadata = {
  title: 'MPKind',
  description: 'A simple MPD client interface optimized for Kindle devices',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        width: '100%',
        maxWidth: '632px',
        overflowX: 'hidden',  
        overflowY: 'scroll',
        boxSizing: 'border-box',
        backgroundColor: '#ffffff',
        color: '#111827',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        WebkitTextSizeAdjust: '100%',
        WebkitTapHighlightColor: 'transparent'
      }}>
        {children}
      </body>
    </html>
  );
} 