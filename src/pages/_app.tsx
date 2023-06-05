import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AppSettingProvider } from '@/providers/AppSettingProvider'
import theme from './theme'
// import AppTheme from './theme'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<AppSettingProvider>
				<ChakraProvider theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</AppSettingProvider>
		</>
	)
}
