import { useForm } from "react-hook-form";
export const useInputUrl = () => {
  const { register, reset, handleSubmit } = useForm<{ url: string }>({
    mode: "onChange",
  });
  return { register, reset, handleSubmit };
};
