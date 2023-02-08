import "@/styles/globals.css";
import "@/styles/variables.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider enableSystem={false} defaultTheme={"dark"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
