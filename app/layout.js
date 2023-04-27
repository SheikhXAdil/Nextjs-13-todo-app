import "../styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="w-full h-screen p-6">
        <div className="max-w-lg min-h-[50%]: w-full mx-auto my-auto p-6">
        <h1 className="text-3xl font-semibold text-center mb-8">Awesome Todo App</h1>
        {children}
        </div>
      </body>
    </html>
  );
}
