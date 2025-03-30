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
export async function updatePost(data: {
  title: string;
  content: string;
  postId: string;
}) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }
    const post = await db.post.findUnique({
      where: {
        id: data.postId,
      },
      select: {
        authorId: true,
      },
    });
    if (!post) {
      return {
        success: false,
        message: "Post Not Found",
      };
    }
    if (post.authorId !== userId) {
      return {
        success: false,
        message: "You don`t have permisson to edit this post",
      };
    }
    await db.post.update({
      where: {
        id: data.postId,
      },
      data: {
        title: data.title,
        content: data.content,
        updateAt: new Date(),
      },
    });
    return {
      success: true,
      data: post,
    };
  } catch (error) {
    console.log("Error Editing Post: ", error);
    return {
      success: false,
      message: "Failed to Edit Post",
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
export async function getPostByIdForEdit(id: string) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "Unauthorized",
      };
    }
    const post = await db.post.findUnique({
      where: {
        id,
      },
      select: {
        title: true,
        content: true,
        authorId: true,
      },
    });
    if (!post) {
      return {
        success: false,
        message: "Post Not Found",
      };
    }
    if (post.authorId !== userId) {
      return {
        success: false,
        message: "You don`t have permisson to edit this post",
      };
    }
    return {
      success: true,
      data: post,
    };
  } catch (error) {
    console.log("Error Fetching Post: ", error);
    return {
      success: false,
      message: "Failed to fetch post",
    };
  }
}
