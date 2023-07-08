import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { zkSync } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { zkSyncTestnet } from "viem/chains";

const { chains, publicClient } = configureChains(
  [zkSync, zkSyncTestnet],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "PeerVote",
  projectId: "b769195d525fcd74f9ac88723ad1b8c5",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
