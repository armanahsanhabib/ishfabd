import NextTopLoader from "nextjs-toploader";
import Footer from "../components/client/Footer";
import Header from "../components/client/Header";
import MenuBar from "../components/client/MenuBar";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <MenuBar />
      <main>
        <NextTopLoader />
        {children}
      </main>
      <Footer />
    </>
  );
}
