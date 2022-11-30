import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import FooterWeb from "../components/footer";
import AdBoard from "../components/ad_board";
import Tentang from "../components/tentang";
import Produk from "../components/produk";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daging Merah</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div>
        <Navbar />
        <AdBoard />
        <Tentang />
        <Produk />
        <Contact />
      </div>
    </>
  );
}
