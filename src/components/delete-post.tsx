"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Delete } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { deletePost } from "@/lib/actions";
import { useRouter } from "next/navigation";

interface DeletePostButtonProps {
  id: string;
}

const DeletePost = ({ id }: DeletePostButtonProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isDeleting, setDeleting] = useState<boolean>(false);
  const router = useRouter();
  const handelDeleted = async () => {
    setDeleting(true);
    try {
      const results = await deletePost(id);
      if (results.success) {
        toast.success("Post deleted Successfully");
        router.refresh();
      }
    } catch (error) {
      console.error("failed to Delete post: ", error);
      toast.error("failed to Delete post");
    } finally {
      setOpen(false);
      setDeleting(false);
    }
  };
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger>
        <Button
          variant={"outline"}
          className=" hover:text-destructive"
          size={"sm"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Delete />
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isDeleting}
            className="bg-destructive hover:bg-destructive/80"
            onClick={handelDeleted}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeletePost;
