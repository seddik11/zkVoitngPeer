import type { ReactNode } from "react";
import Link from "next/link";
import { ConnectWallet } from "./ConnectWallet";
import { useAccount } from "wagmi";

export const NAVIGATION_ITEMS = [
  <div key={0}>
    <Link className="btn" href="/landing">
      {" "}
      LANDING{" "}
    </Link>
  </div>,
  <div key={1}>
    <Link className="btn" href="/welcome">
      {" "}
      Welcome{" "}
    </Link>
  </div>,
];

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-br from-primary to-secondary">
      <TopNavigation>{props.children}</TopNavigation>
    </div>
  );
};

const TopNavigation = ({ children }: { children: ReactNode }) => {
  const { address, isConnected } = useAccount();
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn-ghost text-xl normal-case">PEER UP</a>
        </div>
        <div className="navbar-end">
          {isConnected ? "150 Score" : "not connected"}
          <ConnectWallet />
        </div>
      </div>
      <div className="lg:col-span-9 xl:col-span-9">{children}</div>
    </>
  );
};
