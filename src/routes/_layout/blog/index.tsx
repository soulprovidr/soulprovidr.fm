import css from "@components/blog/Blog.module.scss";
import { Page } from "@components/page";
import { getPosts } from "@lib/blog";
import { formatDate } from "@lib/dates";
import { Link, createFileRoute } from "@tanstack/react-router";

const description = "Writing from Soul Provider: music, software, and whatever else.";

export const Route = createFileRoute("/_layout/blog/")({
  head: ({ match }) => ({
    meta: [
      { title: "Blog | Soul Provider" },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: `https://soulprovidr.fm${match.pathname}`,
      },
      { property: "og:title", content: "Blog" },
      { property: "og:description", content: description },
      { property: "og:image", content: "https://soulprovidr.fm/preview.png" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = getPosts();
  return (
    <Page>
      <Page.Content>
        <h1>Blog</h1>
        <p className={css.intro}>
          Writing about music, software, and whatever else is on my mind.
        </p>
        {posts.length > 0 ? (
          <ul className={css.posts}>
            {posts.map(({ slug, frontmatter }) => (
              <li key={slug}>
                <Link to="/blog/$slug" params={{ slug }}>
                  <span className="eyebrow">{formatDate(frontmatter.date)}</span>
                  <h2>{frontmatter.title}</h2>
                  {frontmatter.description && <p>{frontmatter.description}</p>}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className={css.empty}>Nothing here yet. Check back soon.</p>
        )}
      </Page.Content>
    </Page>
  );
}
