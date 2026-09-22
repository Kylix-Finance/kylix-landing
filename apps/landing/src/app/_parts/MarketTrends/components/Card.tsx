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
          className="mechanism-diagram"
          aria-label="Your collateral generates yield. That yield is applied to the outstanding debt, leaving a smaller balance to repay."
        >
          <svg
            className="mechanism-diagram-lines"
            viewBox="0 0 520 320"
            aria-hidden="true"
          >
            <path
              className="mechanism-branch"
              d="M108,160 C150,160 150,60 184,60"
            />
            <path className="mechanism-branch" d="M108,160 L184,160" />
            <path
              className="mechanism-branch"
              d="M108,160 C150,160 150,260 184,260"
            />
          </svg>
          <div className="mechanism-token" aria-hidden="true">
            <span className="mechanism-token-ring" />
            <span className="mechanism-token-core" />
          </div>
          <div className="mechanism-pill mechanism-pill-a">
            <strong>Your collateral</strong>
          </div>
          <p className="mechanism-note mechanism-note-a">
            Eligible yield-bearing assets
          </p>
          <div className="mechanism-pill mechanism-pill-b mechanism-pill-accent">
            <strong>Yield goes to your loan</strong>
          </div>
          <p className="mechanism-note mechanism-note-b">
            Applied automatically to the debt
          </p>
          <div className="mechanism-pill mechanism-pill-c">
            <strong>A smaller balance to repay</strong>
          </div>
          <p className="mechanism-note mechanism-note-c">
            When yield exceeds borrowing interest
          </p>
        </div>
        <figcaption id="mechanism-caption">
          Planned mechanism. Yield and borrowing rates vary; you still owe any
          remaining balance.
        </figcaption>
      </figure>
    </div>
  );
}
