// import '@/styles/globals.css'
import "@/scss/main.scss";
import Layout from "@/layout/Layout";

export default function App({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}
