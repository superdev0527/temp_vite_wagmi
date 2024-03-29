import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

export function App() {
  const { isConnected } = useAccount();

  return (
    <>
      <h1>wagmi + RainbowKit + Vite</h1>
      <ConnectButton />
    </>
  );
}
