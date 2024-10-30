import { FileItemProps } from "@/common/types";
import { CheckIcon, CopyIcon, EyeClosed, EyeIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

interface FileActionButtonsProps {
    isUploading: boolean;
    handleCopy: () => void;
    isExpanded: boolean;
    isCopied: boolean;
    uploadComplete: boolean;
    file: FileItemProps["file"];
    setIsExpanded: (value: boolean) => void;
    onRemove: (name: string) => void;
}

export const FileActionButtons: React.FC<FileActionButtonsProps> = ({
    isUploading,
    handleCopy,
    isExpanded,
    isCopied,
    uploadComplete,
    file,
    setIsExpanded,
    onRemove
}) => (
    <div className="shrink-0 space-x-2">
        <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            disabled={!uploadComplete || !file.fileUrl}
        >
            {isCopied ? <CheckIcon className="h-5 w-5" /> : <CopyIcon className="h-5 w-5" />}
            <span className="sr-only">Copy file link</span>
        </Button>

        <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            disabled={!uploadComplete}
        >
            {isExpanded ? <EyeClosed className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
            <span className="sr-only">Toggle preview</span>
        </Button>

        <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(file.name)}
            disabled={isUploading}
        >
            <XIcon className="h-5 w-5" />
            <span className="sr-only">Remove file</span>
        </Button>
    </div>
);
