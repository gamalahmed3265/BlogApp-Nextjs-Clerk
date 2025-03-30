import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { getPostById } from "@/lib/actions";
import { Routes } from "@/lib/enum";
import { formateDate } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";
import RichTextEditor from "@/components/rich-text-editor";
import { ArrowLeft, Edit } from "lucide-react";
import { auth } from "@clerk/nextjs/server";

const PostPage = async (props: { params: Promise<{ id: string }> }) => {
  const id = (await props.params).id;
  const post = await getPostById(id);
  const { userId } = await auth();
  if (!post) {
    return notFound();
  }
  const isAuthor = post.data?.authorId === userId;
  return (
    <Container>
      <div className="mb-8 flex items-center gap-4">
        <Link
          href={Routes.ROOT}
          className={buttonVariants({
            variant: "outline",
            size: "sm",
          })}
        >
          <ArrowLeft />
          Back
        </Link>
        {isAuthor && (
          <Link
            href={`/${Routes.POSTS}/${id}/${Routes.EDIT}`}
            className={`capitalize ${buttonVariants({
              variant: "outline",
              size: "sm",
            })}`}
          >
            <Edit />
            Edit
          </Link>
        )}
      </div>
      <article className="mb-4">
        <h1 className="text-3xl font-bold mb-8">{post.data?.title}</h1>

        <div className="flex gap-2 items-center text-sm text-muted-foreground">
          <span>{`${post.data?.author.firstName} ${post.data?.author.lastName}`}</span>
          <span>.</span>
          <time dateTime={post.data?.createAt.toISOString()}>
            {post.data?.createAt
              ? formateDate(post.data.createAt)
              : "UnKown Date"}
          </time>
        </div>
      </article>
      <RichTextEditor content={post.data?.content ?? ""} editable={isAuthor} />
    </Container>
  );
};

export default PostPage;
