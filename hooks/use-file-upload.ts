import { useCallback, useState } from "react";
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE } from "@/common/constants";
import { FileWithPreview } from "@/common/types";
import { useDropzone } from "react-dropzone";

import { uploadToS3 } from "../actions/s3-upload";

export function useFileUpload() {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [uploadComplete, setUploadComplete] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setError(null);
        setUploadComplete(false);
        const newFiles = acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined
            })
        );
        setFiles((prev) => [...prev, ...newFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxSize: MAX_FILE_SIZE,
        accept: ACCEPTED_FILE_TYPES,
        onDropRejected: (fileRejections) => {
            setError(fileRejections[0]?.errors[0]?.message || "File upload failed");
        }
    });

    const removeFile = (name: string) => {
        setFiles((files) => files.filter((file) => file.name !== name));
    };

    const handleUpload = async () => {
        setIsUploading(true);
        setUploadProgress(0);

        try {
            const totalFiles = files.length;
            const updatedFiles: FileWithPreview[] = [];

            for (const file of files) {
                const formData = new FormData();
                formData.append("file", file);

                const result = await uploadToS3(formData);
                if (!result.success) {
                    throw new Error(result.error);
                }

                updatedFiles.push({
                    ...file,
                    fileUrl: result.fileUrl
                });

                setUploadProgress((prev) => prev + 100 / totalFiles);
            }

            setFiles(updatedFiles);
            setUploadComplete(true); // trigger confetti
        } catch (err) {
            setError(err instanceof Error ? err.message : "Upload failed");
        } finally {
            setIsUploading(false);
        }
    };

    return {
        files,
        uploadProgress,
        isUploading,
        error,
        uploadComplete,
        isDragActive,
        getRootProps,
        getInputProps,
        removeFile,
        handleUpload,
        setFiles
    };
}
