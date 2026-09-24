"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { kylixWordmarkImg } from "~/assets/images";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "~/data/navigation";
import { useLockBodyScroll } from "~/hooks/useLockBodyScroll";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  useLockBodyScroll({ isLocked: isOpen });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSection("");
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-100px 0px -55% 0px" }
    );
    for (const item of navItems) {
      const id = item.link.split("#")[1];
      const element = id ? document.getElementById(id) : null;
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [pathname]);

  const links = navItems.map(({ label, link }) => (
    <Link
      key={link}
      href={link}
      className="nav-link"
      onClick={() => setIsOpen(false)}
      aria-current={
        pathname === "/" && link === `/#${activeSection}`
          ? "location"
          : undefined
      }
    >
      {label}
    </Link>
  ));

  return (
    <>
      <header className="site-header">
        <div className="site-container header-inner">
          <Link
            href="/"
            aria-label="Kylix Finance, home"
            className="brand-link"
          >
            <Image
              src={kylixWordmarkImg}
              alt="Kylix"
              width={88}
              height={35}
              priority
            />
          </Link>
          <nav aria-label="Primary" className="desktop-nav">
            {links}
            <Button href="/#waiting-list">
              Get updates <span aria-hidden="true">↗</span>
            </Button>
          </nav>
          <button
            type="button"
            className="menu-button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
      </header>
      <dialog
        ref={dialogRef}
        id="mobile-nav"
        aria-label="Site navigation"
        className="mobile-dialog"
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])"
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}
      >
        <div className="mobile-dialog-top">
          <span className="eyebrow">Explore Kylix</span>
          <button
            type="button"
            className="menu-button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m5 5 10 10M15 5 5 15"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="mobile-nav">
          {links}
          <Link
            href="/faq"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Button href="/#waiting-list" onClick={() => setIsOpen(false)}>
            Get launch updates <span aria-hidden="true">↗</span>
          </Button>
        </nav>
      </dialog>
    </>
  );
}
