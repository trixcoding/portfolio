import "./globals.css";
export const metadata = {
  title: "UnfriendLy",
  description: "FullStack Wizardry",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth">
      <head>
        <link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css" rel="stylesheet" />
      </head>
     <body className="antialiased bg-grid flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        <footer />
      </body>
    </html>
  );
}
