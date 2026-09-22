import Section from "~/components/Section";
import { howItsWorksData } from "~/data";
import Card from "./components/Card";
export default function HowItWorks() {
  return (
    <Section
      heading={howItsWorksData.heading}
      eyebrow="02 / How it works"
      description={howItsWorksData.description}
      id={howItsWorksData.id}
    >
      <ol className="roles-list">
        {howItsWorksData.items.map((item, index) => (
          <Card data={item} index={index} key={item.id} />
        ))}
      </ol>
    </Section>
  );
}
