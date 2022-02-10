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

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient());
	return (
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<Layout>
					<Component {...pageProps} />
					<ReactQueryDevtools initialIsOpen={false} />
				</Layout>
			</QueryClientProvider>
		</AuthProvider>
	);
}

export default MyApp;
