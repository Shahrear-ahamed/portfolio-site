import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
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
      </main>
    </>
  );
}
