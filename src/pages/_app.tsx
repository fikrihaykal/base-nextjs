import { AppSettingProvider } from "@/providers/AppSettingProvider";
import "@/styles/globals.css";
import theme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/providers/AuthProvider";
import { AuthSSO } from "@/utils/auth/AuthSSO";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const [queryClient] = useState(() => new QueryClient());

	if (router.pathname === "/_error")
		return (
			<>
				<AppSettingProvider>
					<ChakraProvider theme={theme}>
						<Component {...pageProps} />;
					</ChakraProvider>
				</AppSettingProvider>
			</>
		);

	return (
		<>
			<AuthProvider>
				<AppSettingProvider>
					<QueryClientProvider client={queryClient}>
						<ChakraProvider theme={theme}>
							<AuthSSO>
								<Hydrate state={pageProps.dehydratedState}>
									<AnimatePresence
										mode="wait"
										initial={false}
										onExitComplete={() => {
											document.getElementById("top")?.scrollIntoView();
										}}
									>
										<Component key={router.route} {...pageProps} />
									</AnimatePresence>
								</Hydrate>
							</AuthSSO>
						</ChakraProvider>
					</QueryClientProvider>
				</AppSettingProvider>
			</AuthProvider>
		</>
	);
}

export { getServerSideProps } from "@/Chakra";

