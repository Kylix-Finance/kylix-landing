import { ComponentProps, ReactElement, ReactNode } from "react";
import { cn } from "~/utils";
interface Props extends Omit<ComponentProps<"section">, "children"> {
  children: ReactNode;
  heading?: { right?: string; left?: string };
  eyebrow?: string;
  description?: string;
  contentClassName?: string;
}
export default function Section({
  children,
  description,
  heading,
  eyebrow,
  contentClassName,
  className,
  id,
  ...rest
}: Props): ReactElement {
  const titleId = id ? `${id}-heading` : undefined;
  return (
    <section
      {...rest}
      id={id}
      aria-labelledby={heading ? titleId : undefined}
      className={cn("site-section", className)}
    >
      <div className={cn("site-container section-content", contentClassName)}>
        {heading && (
          <div className="section-heading">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 id={titleId} className="section-title">
              {heading.left}
              {heading.left && heading.right ? " " : ""}
              {heading.right && (
                <span className="text-primary-400">{heading.right}</span>
              )}
            </h2>
            {description && (
              <p className="section-description">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
