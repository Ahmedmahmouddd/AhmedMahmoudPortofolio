import { createFileRoute } from "@tanstack/react-router";
import { Workspace } from "@/components/portfolio/Workspace";

export const Route = createFileRoute("/")({
  component: Workspace,
});
