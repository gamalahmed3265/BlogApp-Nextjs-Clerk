"use client";
import RichTextEditor from "@/components/rich-text-editor";
import { Button, buttonVariants } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getPostByIdForEdit, updatePost } from "@/lib/actions";
import { Routes } from "@/lib/enum";
import { useAuth } from "@clerk/nextjs";
import { ArrowLeft, Circle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, use, useEffect, useState } from "react";
import { toast } from "sonner";

const PostEditPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const { userId, isLoaded, isSignedIn } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!isSignedIn) {
        return;
      }
      try {
        const post = await getPostByIdForEdit(id);
        console.log(post);
        if (post.data && post.success) {
          setContent(post.data.content);
          setTitle(post.data.title);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch post");
      } finally {
        setIsLoading(false);
      }
    };
    if (isLoaded) {
      fetchPost();
    }
  }, [id, isLoaded, isLoading, isSignedIn]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  const handelSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmiting((prev) => !prev);
    try {
      if (!userId) {
        throw new Error("User is not authenticated");
      }

      const response = await updatePost({
        title,
        content,
        postId: `${id}`,
      });
      if (response.success) {
        toast.success("Post Updated Successfully");
        router.push(`${Routes.ROOT}`);
      } else {
        toast.error("failed to update post");
      }
    } catch (error) {
      console.error("failed to update post: ", error);
      toast.error("failed to update post");
    } finally {
      setIsSubmiting((prev) => !prev);
    }
  };
  return (
    <Container>
      <div className="mb-8">
        <Link
          href={`/${Routes.POSTS}/${id}`}
          className={buttonVariants({
            variant: "outline",
            size: "sm",
          })}
        >
          {" "}
          <ArrowLeft />
          Back
        </Link>
        <h1 className="text-3xl font-bold mb-8">Edit Post</h1>
        <form className="max-w-3xl space-y-6" onSubmit={handelSubmit}>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="bg-slate-50"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <RichTextEditor content={content} onChange={setContent} />
          </div>
          <Button disabled={isSubmiting}>
            {isSubmiting ? (
              <span className="flex items-center gap-1">
                <Circle />
                {"Saving..."}
              </span>
            ) : (
              "Save Changes"
            )}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default PostEditPage;
