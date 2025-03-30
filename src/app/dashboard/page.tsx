import BlogPostList from "@/components/ui/blog.post-list";
import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Routes } from "@/lib/enum";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
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
      <BlogPostList />
    </Container>
  );
};

export default DashboardPage;
