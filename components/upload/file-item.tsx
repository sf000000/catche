"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon, CopyIcon, File, FileText, ImageIcon, Video, X } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface FileWithPreview {
    name: string;
    size: number;
    type: string;
    preview?: string;
    fileUrl?: string;
}

interface FileItemProps {
    file: FileWithPreview;
    isUploading: boolean;
    onRemove: (name: string) => void;
}

export default function FileItem({ file, isUploading, onRemove }: FileItemProps) {
    const [progress, setProgress] = useState(0);
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (isUploading) {
            const timer = setInterval(() => {
                setProgress((oldProgress) => {
                    const newProgress = Math.min(oldProgress + Math.random() * 10, 100);
                    if (newProgress === 100) {
                        clearInterval(timer);
                    }
                    return newProgress;
                });
            }, 500);
            return () => clearInterval(timer);
        }
    }, [isUploading]);

    const getFileIcon = () => {
        if (file.type.startsWith("image/")) return <ImageIcon className="h-8 w-8 text-blue-500" />;
        if (file.type.startsWith("video/")) return <Video className="h-8 w-8 text-purple-500" />;
        if (file.type.startsWith("text/")) return <FileText className="h-8 w-8 text-green-500" />;
        return <File className="h-8 w-8 text-gray-500" />;
    };

    const handleCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(file.fileUrl!);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="overflow-hidden">
                <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                        <div className="shrink-0">
                            {file.preview ? (
                                <Image
                                    src={file.preview}
                                    alt={file.name}
                                    className="rounded-md object-cover aspect-square"
                                    width={64}
                                    height={64}
                                    onLoad={() => {
                                        URL.revokeObjectURL(file.preview!);
                                    }}
                                />
                            ) : (
                                <div className="flex h-16 w-16 items-center justify-center rounded-md bg-gray-100">
                                    {getFileIcon()}
                                </div>
                            )}
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-sm font-medium truncate">{file.name}</p>
                            <p className="text-sm text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
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
                        <div className="shrink-0">
                            <Button variant="ghost" size="icon" onClick={handleCopy}>
                                {isCopied ? (
                                    <CheckIcon className="h-5 w-5" />
                                ) : (
                                    <CopyIcon className="h-5 w-5" />
                                )}
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onRemove(file.name)}
                                disabled={isUploading}
                            >
                                <X className="h-5 w-5" />
                                <span className="sr-only">Remove file</span>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
