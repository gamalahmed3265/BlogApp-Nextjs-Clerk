import BlogPostList from "@/components/ui/blog.post-list";
import Container from "@/components/ui/container";
import { db } from "@/lib/db";
export default async function Home() {
  const posts = await db.post.findMany({
    orderBy: {
      createAt: "desc",
    },
    include: {
      author: true,
    },
  });
  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Latest Posts</h1>
        <p className="text-muted-foreground">
          Explore the latest article and insights
        </p>
      </div>
      <BlogPostList posts={posts} />
    </Container>
  );
}
