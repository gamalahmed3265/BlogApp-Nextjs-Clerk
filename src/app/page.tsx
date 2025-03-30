import BlogPostList from "@/components/ui/blog.post-list";
import Container from "@/components/ui/container";
export default async function Home() {
  return (
    <Container>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Latest Posts</h1>
        <p className="text-muted-foreground">
          Explore the latest article and insights
        </p>
      </div>
      <BlogPostList />
    </Container>
  );
}
