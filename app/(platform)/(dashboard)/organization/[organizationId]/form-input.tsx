"use client";
import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

export default function FormInput({ errors }: FormInputProps) {
  const { pending } = useFormStatus();
  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a Board Title "
        disabled={pending}
        // className=" border border-black p-1"
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className=" text-rose-500">
              {error}
            </p>
          ))}{" "}
        </div>
      ) : null}
    </div>
  );
}
