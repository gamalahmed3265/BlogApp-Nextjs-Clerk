import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Routes } from "@/lib/enum";
import { formateDate } from "@/lib/utils";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import { Post as PrismaPost, User } from "@prisma/client";
import { buttonVariants } from "./button";
import { Edit, View } from "lucide-react";
import DeletePost from "../delete-post";
interface Post extends PrismaPost {
  author: User;
}
interface BlogPostsListProps {
  posts: Post[];
  isDashbaord?: boolean;
}
interface BlogPostListProps {
  post: Post;
  isDashbaord?: boolean;
}
const BlogPostList = async ({ posts, isDashbaord }: BlogPostsListProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((e) =>
        isDashbaord ? (
          <div key={e.id}>
            <PostCard post={e} isDashbaord={isDashbaord} />
          </div>
        ) : (
          <Link href={`/${Routes.POSTS}/${e.id}`} key={e.id}>
            <PostCard post={e} isDashbaord={isDashbaord} />
          </Link>
        )
      )}
    </div>
  );
};

import React from "react";

const PostCard = async ({ post, isDashbaord }: BlogPostListProps) => {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <CardTitle className="line-clamp-1">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-muted-foreground line-clamp-3">
          {DOMPurify.sanitize(post.content, {
            ALLOWED_TAGS: [],
          })}
        </div>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        <div>
          <div className="flex gap-2 items-center">
            <span>{`${post.author?.firstName} ${post.author?.lastName}`}</span>
            <span>.</span>
            <time dateTime={post.createAt.toISOString()}>
              {" "}
              {formateDate(post.createAt)}
            </time>
          </div>
          {isDashbaord && (
            <div className="flex mt-4 items-center gap-4 ">
              <Link
                className={`capitalize ${buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}`}
                href={`/${Routes.POSTS}/${post.id}`}
              >
                <View />
                View
              </Link>
              <Link
                href={`/${Routes.POSTS}/${post.id}/${Routes.EDIT}`}
                className={`capitalize ${buttonVariants({
                  variant: "outline",
                  size: "sm",
                })}`}
              >
                <Edit />
                Edit
              </Link>
              <DeletePost id={post.id} />
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogPostList;
