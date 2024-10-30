"use client";

import { useCallback, useEffect, useState } from "react";
import { FileItemProps } from "@/common/types";
import { formatFileSize, getFileType } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { FileActionButtons } from "./file-action-buttons";
import { FileIcon } from "./file-icon";
import { VideoPreview } from "./video-preview";

function FilePreview({ src, alt, onLoad }: { src: string; alt: string; onLoad?: () => void }) {
    return (
        <Image
            src={src}
            alt={alt}
            className="rounded-md object-cover aspect-square"
            width={64}
            height={64}
            onLoad={onLoad}
        />
    );
}

export function FileItem({ file, isUploading, uploadComplete, onRemove }: FileItemProps) {
    const [progress, setProgress] = useState(0);
    const [isCopied, setIsCopied] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        if (!isUploading) return;

        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = Math.min(prev + Math.random() * 10, 100);
                if (next === 100) clearInterval(timer);
                return next;
            });
        }, 500);

        return () => clearInterval(timer);
    }, [isUploading]);

    const handleCopy = useCallback(() => {
        if (!file.fileUrl) return;

        setIsCopied(true);
        navigator.clipboard.writeText(file.fileUrl);
        setTimeout(() => setIsCopied(false), 2000);
    }, [file.fileUrl]);

    const fileType = getFileType(file);
    const isPreviewable = fileType === "image" || fileType === "video";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="overflow-hidden shadow-none dark:bg-secondary/10 bg-secondary/50 border">
                <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                            {file.preview ? (
                                <FilePreview
                                    src={file.preview}
                                    alt={file.name}
                                    onLoad={() => URL.revokeObjectURL(file.preview!)}
                                />
                            ) : (
                                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-100">
                                    <FileIcon type={fileType} className="h-8 w-8" />
                                </div>
                            )}
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium truncate">{file.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {file.size ? formatFileSize(file.size) : "Size unknown"}
                            </p>
                            {file.fileUrl && (
                                <a
                                    href={file.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-600 hover:underline mt-1 block truncate"
                                >
                                    {file.fileUrl}
                                </a>
                            )}
                            {isUploading && (
                                <div className="mt-2">
                                    <Progress value={progress} className="h-2 w-full" />
                                </div>
                            )}
                        </div>
                        <FileActionButtons
                            isUploading={isUploading}
                            handleCopy={handleCopy}
                            isCopied={isCopied}
                            isExpanded={isExpanded}
                            setIsExpanded={setIsExpanded}
                            file={file}
                            uploadComplete={uploadComplete}
                            onRemove={onRemove}
                        />
                    </div>

                    {isExpanded && isPreviewable && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4"
                        >
                            {fileType === "video" ? (
                                <VideoPreview
                                    title={file.name}
                                    src={file.fileUrl || file.preview!}
                                />
                            ) : (
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src={file.fileUrl || file.preview!}
                                        alt={file.name}
                                        width={800}
                                        height={600}
                                        className="w-full object-cover"
                                    />
                                </div>
                            )}
                        </motion.div>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    );
}
