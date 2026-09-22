import { marketTrendsData } from "~/data";
export default function Card({ id }: { id: number }) {
  const item = marketTrendsData.items.find((slide) => slide.id === id);
  if (!item) return null;
  return (
    <div className="mechanics-grid">
      <ol className="mechanic-list">
        {item.items.map((mechanic, index) => (
          <li key={mechanic.title} className="mechanic-item">
            <span className="card-index" aria-hidden="true">
              0{index + 1}
            </span>
            <div>
              <h3>{mechanic.title}</h3>
              <p>{mechanic.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <figure className="mechanism-figure" aria-labelledby="mechanism-caption">
        <p className="eyebrow">The self-repaying loan</p>
        <div
          className="mechanism-flow"
          aria-label="Eligible collateral generates yield. That yield is applied to the outstanding debt."
        >
          <div className="flow-hub" aria-hidden="true">
            <span className="flow-hub-core" />
          </div>
          <svg
            className="flow-lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path className="flow-line" d="M0,50 L100,16.66" />
            <path className="flow-line flow-line-accent" d="M0,50 L100,50" />
            <path className="flow-line" d="M0,50 L100,83.33" />
          </svg>
          <ul className="flow-spokes">
            <li className="flow-node">
              <span className="flow-pill">Your collateral</span>
              <p>Eligible yield-bearing assets</p>
            </li>
            <li className="flow-node flow-node-accent">
              <span className="flow-pill">Yield goes to your loan</span>
              <p>Applied automatically to your debt</p>
            </li>
            <li className="flow-node">
              <span className="flow-pill">A smaller balance to repay</span>
              <p>When yield outpaces interest</p>
            </li>
          </ul>
        </div>
        <figcaption id="mechanism-caption">
          Planned mechanism. Yield and borrowing rates vary; you still owe any
          remaining balance.
        </figcaption>
      </figure>
    </div>
  );
}
