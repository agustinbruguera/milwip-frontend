export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title> FIRST APP </title>
      </head>
      <body>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
