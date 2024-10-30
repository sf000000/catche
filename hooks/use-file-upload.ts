import { useCallback, useState } from "react";
import { ACCEPTED_FILE_TYPES } from "@/common/constants";
import { FileWithPreview } from "@/common/types";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

import { uploadToS3 } from "../actions/s3-upload";

export function useFileUpload() {
    const [files, setFiles] = useState<FileWithPreview[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadComplete, setUploadComplete] = useState(false);

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            setUploadComplete(false);

            if (files.length + acceptedFiles.length > 10) {
                toast.error("Error", {
                    description: "Maximum 10 files allowed"
                });
                return;
            }

            const newFiles = acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined,
                    path: file.name
                })
            ) as FileWithPreview[];
            setFiles((prev) => [...prev, ...newFiles]);
        },
        [files.length]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxSize: parseInt(process.env.MAX_FILE_SIZE!),
        accept: ACCEPTED_FILE_TYPES,
        maxFiles: 10,
        onDropRejected: (fileRejections) => {
            if (fileRejections[0]?.errors[0]?.code === "too-many-files") {
                toast.error("Error", {
                    description: "Maximum 10 files allowed"
                });
            } else {
                toast.error("Error", {
                    description: fileRejections[0]?.errors[0]?.message || "File upload failed"
                });
            }
        }
    });

    const removeFile = (name: string) => {
        setFiles((files) => files.filter((file) => file.name !== name));
    };

    const handleUpload = async () => {
        setIsUploading(true);

        try {
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
            }

            setFiles(updatedFiles);
            setUploadComplete(true);
            toast.success("Upload successful!");
        } catch (err) {
            toast.error("Error", {
                description: err instanceof Error ? err.message : "Upload failed"
            });
        } finally {
            setIsUploading(false);
        }
    };

    return {
        files,
        isUploading,
        uploadComplete,
        isDragActive,
        getRootProps,
        getInputProps,
        removeFile,
        handleUpload,
        setFiles
    };
}
