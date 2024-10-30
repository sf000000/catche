import { FileType } from "@/common/types";
import { cn } from "@/lib/utils";
import { FilesIcon, FileText, ImageIcon, VideoIcon } from "lucide-react";

export const FileIcon = ({ type, className }: { type: FileType; className?: string }) => {
    const icons = {
        image: <ImageIcon className={cn("text-blue-500", className)} />,
        video: <VideoIcon className={cn("text-purple-500", className)} />,
        document: <FileText className={cn("text-green-500", className)} />,
        unknown: <FilesIcon className={cn("text-gray-500", className)} />
    };

    return icons[type] || icons.unknown;
};
