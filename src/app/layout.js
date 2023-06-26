export default function RootLayout({ children }) {
    return (
      <html>
        <head>
          <title> FIRST APP </title>
        </head>
        <body>
          {children}
        </body>
      </html>
    )
  }