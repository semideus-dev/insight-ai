import CustomDialog from "@/components/custom/custom-dialog";
import ProjectForm from "./forms";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewProjectDialog({ open, onOpenChange }: NewAgentDialogProps) {
  return (
    <CustomDialog
      title="New Project"
      description="Enter a meeting transcript to create actionable tasks."
      open={open}
      onOpenChange={onOpenChange}
    >
      <ProjectForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </CustomDialog>
  );
}
