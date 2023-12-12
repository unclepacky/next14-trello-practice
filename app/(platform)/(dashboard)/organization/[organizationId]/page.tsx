import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Board } from "./Board";
import Form from "./form";
interface Props {
  params: { organizationId: string };
}

export default async function OrganizationIdPage({
  params: { organizationId },
}: Props) {
  const boards = await db.board.findMany();

  return (
    <div className=" flex flex-col space-y-4">
      <Form />
      <div className=" space-y-2">
        {boards.map((board) => (
          // <div key={board.id}> Board Name is: {board.title}</div>
          <Board key={board.id} id={board.id} title={board.title} />
        ))}
      </div>
    </div>
  );
}
