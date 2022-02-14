/** @format */

import "../styles/globals.scss";
import React from "react";
import type { AppProps } from "next/app";
import Layout from "../comps/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import theme from "../theme/theme";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "@/comps/config/AuthContext";
import ReadingProgress from "utils/readingProgress";
import { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient());
	const target: any = React.createRef();
	return (
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools initialIsOpen={false} />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</QueryClientProvider>
		</AuthProvider>
	);
}

export default MyApp;
