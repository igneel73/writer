import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";

export default function App() {
  return (
    <Layout>
      <Header />
      <Body />
    </Layout>
  );
}
