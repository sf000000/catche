export interface FileWithPreview extends File {
    preview?: string;
    fileUrl?: string;
}

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
