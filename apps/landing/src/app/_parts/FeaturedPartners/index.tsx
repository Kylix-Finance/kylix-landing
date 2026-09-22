import Image from "next/image";
import { featuredPartnersData } from "~/data";
const partnerImages: Record<string, string> = {
  "Decentralized Futures": "decentralized-futures",
  Hercle: "hercle",
  "Harbour Industrial Capital": "harbour",
  Pendulum: "pendulum",
  Polimec: "polimec",
};
export default function FeaturedPartners() {
  return (
    <section
      id={featuredPartnersData.id}
      aria-labelledby="backers-heading"
      className="site-container partners"
    >
      <h2 id="backers-heading" className="partners-label">
        Supported by
      </h2>
      <ul className="partners-list">
        {featuredPartnersData.items.map(({ link, name }) => (
          <li key={name}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
            >
              <Image
                src={`/assets/partners/${partnerImages[name]}.svg`}
                alt={name}
                width={150}
                height={96}
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
