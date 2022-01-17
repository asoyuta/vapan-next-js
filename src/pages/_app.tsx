import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../redux/app/store'

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <ReduxProvider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ReduxProvider>
  )
}

export default MyApp
