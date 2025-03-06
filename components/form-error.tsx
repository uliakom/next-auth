import { Info } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;
    return (
      <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
        <Info className="text-red-500" size={16} />
        <p className="text-xs text-red-500">{message}</p>
      </div>
  
  );
};
