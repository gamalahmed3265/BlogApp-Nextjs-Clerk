import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Routes } from "@/lib/enum";
import { postList } from "@/lib/moc-data";
import { formateDate } from "@/lib/utils";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";

const BlogPostList = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {postList.posts.map((e) => (
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
              <div className="flex gap-2 items-center">
                <span>{`${e.author?.firstName} ${e.author?.lastName}`}</span>
                <span>.</span>
                <time dateTime={e.createAt.toISOString()}>
                  {" "}
                  {formateDate(e.createAt)}
                </time>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default BlogPostList;
