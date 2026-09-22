import Section from "~/components/Section";
import Card from "./components/Card";
import { smartLendingData } from "~/data";
export default function SmartLending() {
  return (
    <Section
      heading={smartLendingData.heading}
      eyebrow="01 / The protocol"
      description={smartLendingData.description}
      id={smartLendingData.id}
    >
      <div className="protocol-grid">
        {smartLendingData.items.map((item, index) => (
          <Card key={item.heading} {...item} index={index} />
        ))}
      </div>
    </Section>
  );
}
