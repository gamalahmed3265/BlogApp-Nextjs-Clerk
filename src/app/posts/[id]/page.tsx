import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { getPostById } from "@/lib/actions";
import { Routes } from "@/lib/enum";
import { formateDate } from "@/lib/utils";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { notFound } from "next/navigation";

const PostPage = async (props: { params: Promise<{ id: string }> }) => {
  const id = (await props.params).id;
  const post = await getPostById(id);
  if (!post) {
    return notFound();
  }
  return (
    <Container>
      {" "}
      <div className="mb-8">
        <Link
          href={Routes.ROOT}
          className={buttonVariants({
            variant: "outline",
            size: "sm",
          })}
        >
          Back
        </Link>
      </div>
      <article>
        <h1 className="text-3xl font-bold mb-8">{post.data?.title}</h1>
        <div className="text-muted-foreground">
          {DOMPurify.sanitize(post.data?.content, {
            ALLOWED_TAGS: [],
          })}
        </div>
        <div className="flex gap-2 items-center">
          <span>{`${post.data?.author.firstName} ${post.data?.author.lastName}`}</span>
          <span>.</span>
          <time dateTime={post.data?.createAt.toISOString()}>
            {post.data?.createAt
              ? formateDate(post.data?.createAt)
              : "UnKown Date"}
          </time>
        </div>
      </article>
    </Container>
  );
};

export default PostPage;
