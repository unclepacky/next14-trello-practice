"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function DeleteBoard(formData: FormData) {
  const id = formData.get("boardId") as string;
  const boards = await db.board.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/organization/org_2ZMPaKShzpJGH5502wrUEhOTCY2");
}
