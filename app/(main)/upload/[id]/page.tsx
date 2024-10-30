"use client";

import { useEffect, useState } from "react";
import { Copy, ExternalLink } from "lucide-react";
import { useParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UploadedFile {
    url: string;
    name: string;
}

export default function UploadDetailsPage() {
    const params = useParams();
    const [files, setFiles] = useState<UploadedFile[]>([]);

    useEffect(() => {
        if (params.id) {
            try {
                const decodedFiles = JSON.parse(atob(params.id as string));
                setFiles(
                    decodedFiles.map((url: string) => ({
                        url,
                        name: url.split("/").pop() || "Unknown file"
                    }))
                );
            } catch (error) {
                console.error("Failed to parse uploaded files:", error);
            }
        }
    }, [params.id]);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // You might want to add a toast notification here
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Uploaded Files</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {files.map((file, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="truncate">{file.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between items-center">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => copyToClipboard(file.url)}
                                >
                                    <Copy className="w-4 h-4 mr-2" />
                                    Copy Link
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <a href={file.url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Open
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
