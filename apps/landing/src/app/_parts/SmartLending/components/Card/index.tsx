import Link from "next/link";
import { SmartLending } from "~/types";
export default function Card({
  to,
  description,
  heading,
  index,
}: SmartLending & { index: number }) {
  return (
    <Link href={to} className="protocol-card">
      <span className="card-index">
        0{index + 1} /{" "}
        {index === 0 ? "Productive collateral" : "Native lending"}
      </span>
      <h3>{heading}</h3>
      <p>{description}</p>
      <span className="text-link">
        {index === 0 ? "Explore the mechanics" : "Find your role"}{" "}
        <span aria-hidden="true">↗</span>
      </span>
    </Link>
  );
}
