import { FileItemProps, FileType } from "@/common/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatFileSize(bytes: number): string {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
}

export function getFileType(file: FileItemProps["file"]): FileType {
    if (file.type?.startsWith("image/")) return "image";
    if (file.type?.startsWith("video/")) return "video";
    if (file.type?.startsWith("text/")) return "document";

    const extension = file.path?.split(".").pop()?.toLowerCase() || "";
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(extension)) return "image";
    if (["mp4", "webm", "mov"].includes(extension)) return "video";
    if (["txt", "doc", "docx", "pdf"].includes(extension)) return "document";

    return "unknown";
}
