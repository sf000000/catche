export interface UploadedFile {
    name: string;
    size: number;
    type: string;
    url: string;
    key: string;
    uploadedAt: string;
}

interface FileUploadProgress {
    progress: number;
    status: "idle" | "uploading" | "success" | "error";
    url?: string;
}

export interface UploadState {
    files: File[];
    uploadProgress: Record<string, FileUploadProgress>;
}

export interface FileWithPreview extends File {
    name: string;
    path: string;
    size: number;
    type: string;
    preview?: string;
    fileUrl?: string;
}

export interface FileItemProps {
    file: FileWithPreview;
    isUploading: boolean;
    uploadComplete: boolean;
    onRemove: (name: string) => void;
}

export type FileType = "image" | "video" | "document" | "unknown";
