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
interface Post extends PrismaPost {
  author: User;
}
interface BlogPostListProps {
  posts: Post[];
  isDashbaord?: boolean;
}
const BlogPostList = async ({ posts, isDashbaord }: BlogPostListProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((e) => (
        <Link href={`/${Routes.POSTS}/${e.id}`} key={e.id}>
          <Card className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>{e.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground">
                {DOMPurify.sanitize(e.content, {
                  ALLOWED_TAGS: [],
                })}
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              <div>
                <div className="flex gap-2 items-center">
                  <span>{`${e.author?.firstName} ${e.author?.lastName}`}</span>
                  <span>.</span>
                  <time dateTime={e.createAt.toISOString()}>
                    {" "}
                    {formateDate(e.createAt)}
                  </time>
                </div>
                {isDashbaord && (
                  <div className="flex mt-4 items-center justify-between">
                    <Link
                      className={`capitalize ${buttonVariants({
                        variant: "outline",
                        size: "sm",
                      })}`}
                      href={`/${Routes.POSTS}/${e.id}`}
                    >
                      <View />
                      View
                    </Link>
                    <Link
                      href={`/${Routes.POSTS}/${e.id}/${Routes.EDIT}`}
                      className={`capitalize ${buttonVariants({
                        variant: "outline",
                        size: "sm",
                      })}`}
                    >
                      <Edit />
                      Edit
                    </Link>
                  </div>
                )}
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default BlogPostList;
