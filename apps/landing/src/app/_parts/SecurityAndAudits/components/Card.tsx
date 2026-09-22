import { Security } from "~/types";
export default function Card({
  description,
  heading,
  index,
}: Security & { index: number }) {
  return (
    <li className="roadmap-step">
      <span className="eyebrow">
        {index === 0 ? "01 / In progress" : `0${index + 1} / Planned`}
      </span>
      <h3>{heading}</h3>
      <p>{description}</p>
    </li>
  );
}
