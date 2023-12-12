import { DeleteBoard } from "@/actions/delete-board";
import React from "react";
import DeleteButton from "./delete-button";

interface BoardProps {
  id: string;
  title: string;
}

export function Board({ id, title }: BoardProps) {
  // const deleteBoardWithId = DeleteBoard.bind(null, id);

  return (
    // <form action={deleteBoardWithId} className=" flex items-center gap-x-2">
    <form action={DeleteBoard} className=" flex items-center gap-x-2">
      <input type="hidden" name="boardId" value={id} />
      <p>Board Name is: {title}</p>
      <DeleteButton />
    </form>
  );
}
