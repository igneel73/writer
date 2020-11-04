import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import TableOfContents from "../components/Body/TableOfContents";
import Editor from "../components/Body/Editor";
import Comments from "../components/Body/Comments";

export default function App() {
  return (
    <Layout>
      <Header />
      <Body>
        <TableOfContents />
        <Editor />
        <Comments />
      </Body>
    </Layout>
  );
}
