import Layout from 'components/layouts'
import type { ReactElement } from 'react'

const Home = () => {
  return <div>Hello World</div>
}

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>
export default Home
