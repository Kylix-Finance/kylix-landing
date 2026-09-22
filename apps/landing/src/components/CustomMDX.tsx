import { ReactElement } from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";

type Props = MDXRemoteProps & {
  variant?: "document" | "faq";
};

export const CustomMDX = ({
  variant = "document",
  ...props
}: Props): ReactElement => (
  <div className=" prose mx-auto max-w-prose font-body text-light">
    <MDXRemote
      {...props}
      components={{
        ...(props.components || {}),
        img: (props) => (
          <img
            {...props}
            className="max-w-full h-auto rounded-lg shadow-lg sm:max-w-lg"
          />
        ),
        h1: (props) => (
          <h1
            {...props}
            className="text-3xl sm:text-4xl font-heading font-bold mb-4 text-primary-400"
          >
            {props.children}
          </h1>
        ),
        h2: (headingProps) =>
          variant === "faq" ? (
            <h2
              id={headingProps.id}
              className="mb-3 mt-10 scroll-mt-32 border-t border-white/10 pt-8 font-body text-xl font-semibold tracking-normal text-white first:mt-0 first:border-t-0 first:pt-0 sm:text-2xl"
            >
              {headingProps.children}
            </h2>
          ) : (
            <h2
              {...headingProps}
              className="mb-3 scroll-mt-[8rem] font-heading text-2xl font-bold text-primary-300 sm:text-3xl"
            >
              <a
                href={`#${headingProps.id}`}
                className="hover:text-primary-200"
              >
                {headingProps.children}
              </a>
            </h2>
          ),
        h3: (props) => (
          <h3
            {...props}
            className="text-xl sm:text-2xl font-heading font-bold mb-2 text-primary-200 scroll-mt-[8rem]"
          >
            <a href={`#${props.id}`} className="hover:text-primary-100">
              {props.children}
            </a>
          </h3>
        ),
        h4: (props) => (
          <h4
            {...props}
            className="text-lg sm:text-xl font-heading font-bold mb-2 text-primary-100 scroll-mt-[8rem]"
          >
            <a href={`#${props.id}`} className="hover:text-primary-50">
              {props.children}
            </a>
          </h4>
        ),
        h5: (props) => (
          <h5
            {...props}
            className="text-base sm:text-lg font-heading font-bold mb-1 text-primary-50  scroll-mt-[8rem]"
          >
            <a href={`#${props.id}`} className="hover:text-primary-100">
              {props.children}
            </a>
          </h5>
        ),
        h6: (props) => (
          <h6
            {...props}
            className="text-sm sm:text-base font-heading font-bold mb-1 text-primary-100  scroll-mt-[8rem]"
          >
            <a href={`#${props.id}`} className="hover:text-primary-200">
              {props.children}
            </a>
          </h6>
        ),
        ul: (listProps) => (
          <ul
            {...listProps}
            className={
              variant === "faq"
                ? "mb-4 list-disc space-y-2 pl-6 text-base leading-7 text-secondary-100 marker:text-primary-500"
                : "mb-4 list-disc space-y-2 pl-6 text-primary-100"
            }
          />
        ),
        ol: (listProps) => (
          <ol
            {...listProps}
            className={
              variant === "faq"
                ? "mb-4 list-decimal space-y-2 pl-6 text-base leading-7 text-secondary-100 marker:text-primary-500"
                : "mb-4 list-decimal space-y-2 pl-6 text-primary-100"
            }
          />
        ),
        p: (paragraphProps) => (
          <p
            {...paragraphProps}
            className={
              variant === "faq"
                ? "mb-4 text-base font-normal leading-7 text-secondary-100"
                : "mb-4 leading-relaxed text-primary-100"
            }
          />
        ),
        strong: (props) => (
          <strong {...props} className="font-semibold text-white" />
        ),
        a: ({ href = "", children, ...anchorProps }) => {
          const external =
            href.startsWith("http://") || href.startsWith("https://");
          return (
            <a
              href={href}
              {...anchorProps}
              className="text-primary-300 underline decoration-primary-500/40 underline-offset-4 hover:text-primary-100"
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          );
        },
      }}
      options={{
        parseFrontmatter: true,
        mdxOptions: { rehypePlugins: [rehypeSlug] },
      }}
    />
  </div>
);
