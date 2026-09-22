import { HowItsWork } from "~/types";
export default function Card({
  data: { description, heading },
  index,
}: {
  data: HowItsWork;
  index: number;
}) {
  return (
    <li className="role-row">
      <span className="card-index" aria-hidden="true">
        0{index + 1}
      </span>
      <h3>{heading}</h3>
      <p>{description}</p>
    </li>
  );
}
