import 'styles/tailwind.css'
import { AppPropsWithLayout } from 'types/layout'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Component {...pageProps} />)
}
