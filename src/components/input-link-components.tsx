import { useState } from "react";
import { useInputUrl } from "../hook/useInputUrl";
import { useShortLink } from "../hook/useShortLink";
import ResultComponents from "./result-components";
import { toast } from "sonner";
import { isValidUrl } from "../utils/validate-url";

const InputLink = () => {
  const { register, handleSubmit, reset } = useInputUrl();
  const { mutateAsync, isPending } = useShortLink();
  const [url, setUrl] = useState<string>("");

  const onsubmit = async (url: { url: string }) => {
    if (isValidUrl(url.url)) {
      const res = mutateAsync(url);
      reset({
        url: "",
      });
      setUrl((await res).data);
    } else {
      toast.error("Error Link Url");
    }
  };

  return (
    <div className="flex flex-col items-center w-full gap-6 text-white">
      <div className="bg-white/50 backdrop-blur-3xl shadow-xl p-6 rounded-xl w-full max-w-xl">
        <div className="flex flex-col mb-4">
          <label
            htmlFor="url"
            className="text-xl sm:text-3xl font-bold font-sans text-black flex items-center gap-2 mb-2"
          >
            <img
              src="/chain.svg"
              alt="chain"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            Your Long URL
          </label>
          <input
            id="title"
            type="text"
            placeholder="http://localhost:5173/"
            {...register("url")}
            className="bg-gray-200 p-2 rounded-md focus:bg-gray-400 text-black"
          />
        </div>
        <button
          onClick={handleSubmit(onsubmit)}
          className="p-2 w-full text-lg sm:text-xl bg-gray-400 hover:bg-gray-500 rounded-2xl font-bold font-sans cursor-pointer"
        >
          {isPending ? "Loading..." : "Shorten URL"}
        </button>
      </div>
      <ResultComponents url={url} />
    </div>
  );
};

export default InputLink;
