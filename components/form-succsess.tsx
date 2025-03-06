import { CircleCheckBig } from "lucide-react";


interface FormSuccessProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;
    return (
      <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
        <CircleCheckBig className="text-emerald-500" size={16} />
        <p className="text-xs text-emerald-500">{message}</p>
      </div>
  
  );
};
