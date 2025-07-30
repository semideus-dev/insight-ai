"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoadingIcon } from "@/components/icons";
import { db } from "@/lib/db";
import { projects } from "@/lib/db/schema";
import { authClient } from "@/lib/auth-client";
import { createProject } from "../../actions";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  transcript: z.string().min(10, "Transcript is required."),
});

interface Props {
  onSuccess: () => void;
  onCancel: () => void;
}

export default function ProjectForm({ onSuccess, onCancel }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      transcript: "",
    },
  });

  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsPending(true);
    toast("This might take a few seconds...");

    try {
      const project = await createProject(values);
      toast.success("Project created successfully.");
      router.push(`/projects/${project.id}`);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
    setIsPending(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input placeholder="" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="transcript"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transcript</FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  className="resize-none"
                  rows={9}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-2">
          <Button
            variant="ghost"
            className="rounded-full border font-semibold tracking-wide uppercase"
            size="sm"
            disabled={isPending}
            type="button"
            onClick={() => onCancel()}
          >
            Cancel
          </Button>
          <Button
            disabled={isPending}
            className="rounded-full border font-semibold tracking-wide uppercase"
            size="sm"
            type="submit"
          >
            {isPending ? <LoadingIcon className="animate-spin" /> : "Create"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
