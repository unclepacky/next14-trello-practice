"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, {
    message: "Claude - Min of 3 chars",
  }),
});

export async function create(prevState: State, formData: FormData) {
  //   const title = formData.get("title") as string;
  // const { title } = createBoard.parse({
  //   title: formData.get("title"),
  // });

  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields.",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "DataBase Error",
    };
  }
  revalidatePath("/organization/org_2ZMPaKShzpJGH5502wrUEhOTCY2");
  redirect("/organization/org_2ZMPaKShzpJGH5502wrUEhOTCY2");
}
