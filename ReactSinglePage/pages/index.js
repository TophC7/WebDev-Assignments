import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" px-32 py-10 flex flex-col font-mali gap-10 items-center h-screen text-center">
      <Head>
        <title>Single Page React App</title>
        <meta name="description" content="Created By Chris Toph" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className=" p-10 text-4xl bg-base-200 h-full w-full rounded-md shadow-lg flex justify-center place-items-center min-w-max min-h-max">
        <figure className=" ">
          <Image alt="woo yeah oh yeah" src="/woo-yeah-oh-yeah.gif" width="200%" height="200%" />{" "}
        </figure>
      </main>
      <Footer />
    </div>
  );
}
