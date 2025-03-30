import BlogPostList from "@/components/ui/blog.post-list";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { db } from "@/lib/db";
import { Routes } from "@/lib/enum";
import { auth } from "@clerk/nextjs/server";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }
  const posts = await db.post.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createAt: "desc",
    },
    include: {
      author: true,
    },
  });
  return (
    <Container>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">MyPosts</h1>
        <Link
          href={`/${Routes.DASHBOARD}/${Routes.NEWDASHBOARD}`}
          className={`${buttonVariants()} uppercase`}
        >
          <PlusIcon />
          new post
        </Link>
      </div>
      {posts.length !== 0 ? (
        <BlogPostList posts={posts} isDashbaord={true} />
      ) : (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium">
            You haven`t crated any posts yet`
          </h3>
          <p className="text-muted-foreground mt-2 mb-6">
            Get Started by creating your first post
          </p>
          <Link
            href={`/${Routes.DASHBOARD}/${Routes.NEWDASHBOARD}`}
            className={`${buttonVariants()} uppercase`}
          >
            <PlusIcon />
            Create your first post
          </Link>
        </div>
      )}
    </Container>
  );
};

export default DashboardPage;
