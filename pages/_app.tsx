import { DataProvider } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { lightTheme, darkTheme } from "../themes";
import { ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<DataProvider>
				<Component {...pageProps} />
			</DataProvider>
		</ThemeProvider>
	);
}
