import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/variables.css";
import {useEffect} from "react";
import {ThemeProvider} from "next-themes";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "@/components/dev";

export default function App({Component, pageProps}) {
    useEffect(() => {
        const handleContextmenu = (e) => {
            e.preventDefault();
        };
        document.addEventListener("contextmenu", handleContextmenu);
        return function cleanup() {
            document.removeEventListener("contextmenu", handleContextmenu);
        };
    }, []);

    return (
        <ThemeProvider enableSystem={false} defaultTheme={"dark"}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
            >
                <Component {...pageProps} />
            </DevSupport>
        </ThemeProvider>
    );
}
