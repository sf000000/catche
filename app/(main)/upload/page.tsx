"use client";

// import { FAQ_ITEMS } from "@/common/constants";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Loader2 } from "lucide-react";

import { useFileUpload } from "@/hooks/use-file-upload";

// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger
// } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

// import { Progress } from "@/components/ui/progress";

import { ConfettiComponent } from "@/components/confetti";
import FileItem from "@/components/upload/file-item";
import { UploadZone } from "@/components/upload/upload-zone";

export default function UploadPage() {
    const {
        files,
        // uploadProgress,
        isUploading,
        error,
        uploadComplete,
        isDragActive,
        getRootProps,
        getInputProps,
        removeFile,
        handleUpload,
        setFiles
    } = useFileUpload();

    return (
        <div className="min-h-screen mt-12">
            <ConfettiComponent trigger={uploadComplete} />
            <div className="space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-4"
                >
                    <h1 className="text-4xl font-bold tracking-tight">Upload Files</h1>
                    <p className="text-muted-foreground text-lg">
                        Drag and drop your files here or click to browse
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-background rounded-xl shadow-sm p-6"
                >
                    <UploadZone
                        isUploading={isUploading}
                        isDragActive={isDragActive}
                        getRootProps={getRootProps}
                        getInputProps={getInputProps}
                    />

                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-4"
                            >
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {files.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-4 mt-6"
                            >
                                {files.map((file) => (
                                    <FileItem
                                        key={file.name}
                                        file={file}
                                        isUploading={isUploading}
                                        onRemove={removeFile}
                                    />
                                ))}

                                {/* {isUploading && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="space-y-2 w-full"
                                    >
                                        <Progress value={uploadProgress} className="h-2" />
                                        <p className="text-sm text-muted-foreground text-center">
                                            Uploading... {uploadProgress.toFixed(0)}%
                                        </p>
                                    </motion.div>
                                )} */}

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-end gap-4"
                                >
                                    <Button
                                        variant="outline"
                                        onClick={() => setFiles([])}
                                        disabled={isUploading}
                                    >
                                        Clear All
                                    </Button>
                                    <Button
                                        onClick={handleUpload}
                                        disabled={isUploading || files.some((f) => f.fileUrl)}
                                    >
                                        {isUploading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Uploading
                                            </>
                                        ) : (
                                            "Upload Files"
                                        )}
                                    </Button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-background rounded-xl shadow-sm p-6"
                >
                    <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        {FAQ_ITEMS.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div> */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-sm text-muted-foreground"
                >
                    <p>
                        Need more help? Contact our{" "}
                        <Button variant="link" className="p-0 h-auto font-normal">
                            support team
                        </Button>
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
