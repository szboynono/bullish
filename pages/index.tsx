import type { NextPage } from 'next'
import Layout from '../components/Layout';
import Summary from '../components/summary/Summary'
import Table from '../components/table/Table';

const Home: NextPage = () => {
  return (
    <Layout>
      <Summary />
      <Table mt="8"/>
    </Layout>
  )
}

export default Home
