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
          <div className="flow-node">
            <strong>Your collateral</strong>
            <span>Eligible yield-bearing assets</span>
          </div>
          <div className="flow-arrow" aria-hidden="true">
            <span>↓</span> Generates yield
          </div>
          <div className="flow-node flow-node-accent">
            <strong>Yield goes to your loan</strong>
            <span>Applied automatically to the debt</span>
          </div>
          <div className="flow-arrow" aria-hidden="true">
            <span>↓</span> Offsets borrowing costs
          </div>
          <div className="flow-node">
            <strong>A smaller balance to repay</strong>
            <span>When yield exceeds borrowing interest</span>
          </div>
        </div>
        <figcaption id="mechanism-caption">
          Planned mechanism. Yield and borrowing rates vary; you still owe any
          remaining balance.
        </figcaption>
      </figure>
    </div>
  );
}
