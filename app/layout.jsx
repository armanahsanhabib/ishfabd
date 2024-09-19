import { hindSiliguri } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "Ishfa bd - Dry Fruits, Honey, Islamic Items, Fashion & Dresses",
  description:
    "Discover a wide range of premium dry fruits, natural honey, authentic Islamic items, and trendy fashion & dresses at Minaret Shop. Shop quality products at great prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ishfabd_icon.png" />
      </head>
      <body className={`${hindSiliguri.className} text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
