import Image from "next/image";
import { logoImg } from "~/assets/images";
import Button from "~/components/Button";
import { heroCopy } from "./heroCopy";
export default function HeroIntro() {
  return (
    <section className="hero site-container" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Built on Polkadot Hub
        </p>
        <h1 id="hero-heading" className="hero-title">
          {heroCopy.titleLead}
          <br />
          <span>{heroCopy.titleRest}</span>
        </h1>
        <p className="hero-description">{heroCopy.intro}</p>
        <div className="hero-actions">
          <Button href={heroCopy.primary.href}>
            {heroCopy.primary.label}
            <span aria-hidden="true">↗</span>
          </Button>
          <a href={heroCopy.secondary.href} className="text-link">
            {heroCopy.secondary.label}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <p className="hero-status">
          In development <span aria-hidden="true">·</span> Mainnet after audit
          and testing
        </p>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-orbit hero-orbit-outer" />
        <div className="hero-orbit hero-orbit-inner" />
        <div className="hero-art-axis" />
        <Image
          src={logoImg}
          alt=""
          priority
          sizes="(max-width: 767px) 280px, 480px"
          className="hero-emblem"
        />
        <span className="orbit-label orbit-label-dot">
          <span className="asset-dot" /> DOT
        </span>
        <span className="orbit-label orbit-label-usdc">
          <span className="asset-usdc">$</span> USDC
        </span>
        <span className="hero-art-caption">Native assets. Shared ground.</span>
      </div>
      <div className="hero-baseline">
        <span>Over-collateralized lending</span>
        <a href="#smart-lending">
          Explore the protocol <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
