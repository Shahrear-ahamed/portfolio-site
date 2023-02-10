import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import MyWorks from "@/components/MyWorks/MyWorks";
import Navbar from "@/components/Navbar/Navbar";
import Specialized from "@/components/Specialized/Specialized";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shahrear Ahamed</title>
        <meta
          name="description"
          content="Hey, I am Shahrear Ahamed, a professional and passionate, programmer and full-stack (MERN) web developer. If you want to develop or hire me, don't hesitate to contact me!"></meta>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Specialized />
        <MyWorks />
        <Footer />
      </main>
    </>
  );
}
