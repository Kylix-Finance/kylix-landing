import { ReactElement } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CustomMDX } from "~/components/CustomMDX";
import { getAllContentSlugs, getContentData } from "~/utils/mdx";

function headingId(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function faqQuestions(markdown: string): { id: string; title: string }[] {
  return markdown.split("\n").flatMap((line) => {
    const match = /^##\s+(.+?)\s*$/.exec(line);
    if (!match?.[1]) return [];
    const title = match[1];
    return [{ title, id: headingId(title) }];
  });
}

export function generateStaticParams(): { slug: string }[] {
  return getAllContentSlugs().map((slug) => ({ slug: slug.toString() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<{
  title?: string;
  description?: string;
}> {
  const { slug } = await params;
  const post = getContentData(slug);
  if (!post) return {};
  return {
    title: typeof post.title === "string" ? post.title : undefined,
    description:
      typeof post.description === "string" ? post.description : undefined,
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<ReactElement> {
  const { slug } = await params;
  const post = getContentData(slug);

  if (!post) {
    notFound();
  }

  const title = typeof post.title === "string" ? post.title : "Note";
  const description =
    typeof post.description === "string" ? post.description : "";
  const isFaq = slug === "faq";
  const questions = isFaq ? faqQuestions(post.content) : [];

  return (
    <article className="relative mx-auto mt-28 flex w-full max-w-3xl flex-col px-6 pb-24 text-white">
      <Link
        href="/"
        className="mb-8 w-fit text-sm text-secondary-100 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
      >
        Home
      </Link>
      <h1 className="mb-4 text-balance font-heading text-4xl font-bold text-primary-500 sm:text-5xl">
        {title}
      </h1>
      {isFaq && description.length > 0 && (
        <p className="mb-8 max-w-xl text-base font-normal leading-7 text-secondary-100">
          {description}
        </p>
      )}
      {questions.length > 0 && (
        <nav aria-label="Questions" className="mb-12">
          <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {questions.map((question) => (
              <li key={question.id}>
                <a
                  href={`#${question.id}`}
                  className="text-sm leading-6 text-secondary-100 underline-offset-4 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  {question.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
      <div
        className={
          isFaq
            ? "relative z-10 rounded-3xl border border-white/10 bg-[#070809]/80 px-5 py-8 backdrop-blur-md sm:px-8"
            : undefined
        }
      >
        <CustomMDX source={post.content} variant={isFaq ? "faq" : "document"} />
      </div>
    </article>
  );
}
