import BlogPostList from "@/components/ui/blog.post-list";

export default async function Home() {
  return (
    <main className="container mx-auto py-10 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Latest Posts</h1>
        <p className="text-muted-foreground">
          Explore the latest article and insights
        </p>
      </div>
      <BlogPostList />
    </main>
  );
}
