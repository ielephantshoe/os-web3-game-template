import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import TokenBalance from "../components/TokenBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import style from "./../styles/home.module.css";
const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  return (
    <div>
      <Head>
        <title>Chain Wars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={style.header}>
        <nav className={style.nav}>
          <Link href="/" passHref>
            <h2>Chain Wars</h2>
          </Link>

          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>

      <main>
        <h1>Welcome to Chain Wars</h1>
        <section className={style.content}>
          <h2>What is Chain Wars?</h2>
        </section>
        {isConnected && (
          <section>
            <ETHBalance />

            <TokenBalance tokenAddress={DAI_TOKEN_ADDRESS} symbol="DAI" />
          </section>
        )}
      </main>
    </div>
  );
}

export default Home;
