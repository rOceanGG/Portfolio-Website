import "./globals.css";
import Head from 'next/head'


export const metadata = {
  title: "Roshan Gani Ganithi",
  description: "Roshans Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
        <link rel = "icon" type = "image/png" href = "./imgs/rgg.png"/>
      </Head>
      <body>{children}</body>
    </html>
  );
}
