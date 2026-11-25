import css from "@components/blog/Blog.module.scss";
import { Page } from "@components/page";
import { getPost } from "@lib/blog";
import { formatDate } from "@lib/dates";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Fragment, ReactNode } from "react";

// Post bodies render straight into the page column, not inside the default
// MDX page wrapper.
const PostBody = ({ children }: { children?: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

export const Route = createFileRoute("/_layout/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { slug: post.slug, frontmatter: post.frontmatter };
  },
  head: ({ loaderData, match }) => {
    const title = loaderData?.frontmatter.title ?? "Blog";
    const description = loaderData?.frontmatter.description ?? "";
    return {
      meta: [
        { title: `${title} | Soul Provider` },
        { name: "description", content: description },
        { property: "og:type", content: "article" },
        {
          property: "og:url",
          content: `https://soulprovidr.fm${match.pathname}`,
        },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: "https://soulprovidr.fm/preview.png" },
      ],
    };
  },
  component: BlogPost,
  notFoundComponent: PostNotFound,
});

function BlogPost() {
  const { slug } = Route.useLoaderData();
  const post = getPost(slug)!;
  const { Content, frontmatter } = post;
  return (
    <Page>
      <Page.Content>
        <Link className={css.back} to="/blog">
          ← All posts
        </Link>
        <header className={css.postHeader}>
          <span className="eyebrow">{formatDate(frontmatter.date)}</span>
          <h1>{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className={css.lede}>{frontmatter.description}</p>
          )}
        </header>
        <Content components={{ wrapper: PostBody }} />
        <p className={css.signoff}>
          Thanks for reading. Say hi at{" "}
          <a href="mailto:shola@soulprovidr.fm">shola@soulprovidr.fm</a>.
        </p>
      </Page.Content>
    </Page>
  );
}

function PostNotFound() {
  return (
    <Page>
      <Page.Content>
        <h1>Post not found</h1>
        <p>
          That post doesn't exist (or it moved). <Link to="/blog">See all posts</Link>.
        </p>
      </Page.Content>
    </Page>
  );
}
