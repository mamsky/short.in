import { FaRegCopy } from "react-icons/fa";
import { toast } from "sonner";
import { useShortLink } from "../hook/useShortLink";
import { QRCodeCanvas } from "qrcode.react";

const ResultComponents = ({ url }: { url: string }) => {
  const { isPending } = useShortLink();
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success("Copy Success");
  };
  return (
    <div className="bg-white/50 backdrop-blur-xl p-4 rounded-xl w-full max-w-xl text-black font-serif">
      <h1 className="font-bold text-xl sm:text-3xl mb-2">Result:</h1>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        {isPending && (
          <div className="animate-pulse h-6 bg-gray-100 rounded-full w-full max-w-md mb-2 sm:mb-0"></div>
        )}
        {url && (
          <>
            <span className="font-semibold">Link:</span>
            <a
              href={url}
              target="_blank"
              className="flex items-center text-blue-700 text-xl"
            >
              {url}
            </a>
            <QRCodeCanvas value={url} />,
            <button className="cursor-pointer text-xl" onClick={handleCopyLink}>
              <FaRegCopy />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultComponents;
