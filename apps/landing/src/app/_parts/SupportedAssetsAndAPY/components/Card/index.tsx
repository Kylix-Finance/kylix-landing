import Image from "next/image";
import { Asset } from "~/types";
export default function Card({ src, symbol }: Asset) {
  return (
    <div className="asset-card">
      <div className="asset-icon">
        <Image src={src} alt="" width={52} height={52} sizes="52px" />
      </div>
      <div>
        <h3>{symbol}</h3>
        <p>{symbol === "DOT" ? "Polkadot" : "USD Coin"}</p>
      </div>
      <span className="asset-status">Planned at launch</span>
    </div>
  );
}
