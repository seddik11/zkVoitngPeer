import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { zkSync } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { AppProps } from "next/app";

const { chains, publicClient } = configureChains([zkSync], [publicProvider()]);
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
