import Image from "next/image";
import { kylixWordmarkImg } from "~/assets/images";
import Link from "next/link";
import { footerData } from "~/data/footer";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-main">
        <div>
          <Link
            href="/"
            aria-label="Kylix Finance, home"
            className="brand-link"
          >
            <Image src={kylixWordmarkImg} alt="Kylix" width={88} height={35} />
          </Link>
          <p className="footer-tagline">
            Lending, borrowing, and a new role for your collateral.
          </p>
        </div>
        <div className="footer-links">
          {footerData.right
            .filter((column) => column.title !== "Socials")
            .map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2>{column.title}</h2>
                <ul>
                  {column.items.map((item) => {
                    const external = /^https?:\/\//.test(item.link);
                    return (
                      <li key={item.link}>
                        <Link
                          href={item.link}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                        >
                          {item.label}
                          {external && (
                            <span className="ml-2" aria-hidden="true">
                              ↗
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            ))}
        </div>
      </div>
      <div className="site-container footer-bottom">
        <p>© {new Date().getFullYear()} Kylix Finance</p>
        <div className="social-links">
          {footerData.left.map(({ icon: Icon, link, name }) => (
            <Link
              key={name}
              href={link}
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon width={20} height={20} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
