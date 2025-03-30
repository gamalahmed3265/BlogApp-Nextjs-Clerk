"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db";

export async function createPost(data: { title: string; content: string }) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }
    const post = await db.post.create({
      data: {
        title: data.title,
        content: data.content,
        authorId: userId,
      },
    });
    return {
      success: true,
      data: post,
    };
  } catch (error) {
    console.log("Error Creating Post: ", error);
    return {
      success: false,
      message: "Failed to Create Post",
    };
  }
}
export async function getPostById(id: string) {
  try {
    const post = await db.post.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    });
    if (!post) {
      return {
        success: false,
        message: "Post Not Found",
      };
    }
    return {
      success: true,
      data: post,
    };
  } catch (error) {
    console.log("Error Creating Post: ", error);
    return {
      success: false,
      message: "Post Not Found",
    };
  }
}
