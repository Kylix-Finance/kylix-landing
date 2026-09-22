import Section from "~/components/Section";
import { securityAndAuditsData } from "~/data";
import Card from "./components/Card";
export default function SecurityAndAudits() {
  return (
    <Section
      heading={securityAndAuditsData.heading}
      eyebrow="05 / The road to launch"
      description={securityAndAuditsData.description}
      id={securityAndAuditsData.id}
    >
      <ol className="roadmap-grid">
        {securityAndAuditsData.items.map((item, index) => (
          <Card {...item} index={index} key={item.heading} />
        ))}
      </ol>
      <a
        href="/faq#will-there-be-an-audit-before-launch"
        className="text-link self-start"
      >
        More about the launch process <span aria-hidden="true">↗</span>
      </a>
    </Section>
  );
}
