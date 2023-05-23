import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AppSettingProvider } from '@/providers/AppSettingProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<AppSettingProvider>
				<ChakraProvider>
					<Component {...pageProps} />
				</ChakraProvider>
			</AppSettingProvider>
		</>
	)
}
