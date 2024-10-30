"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useFileUpload } from "@/hooks/use-file-upload";

import { ConfettiComponent } from "@/components/confetti";
import { ActionButtons } from "@/components/upload/action-buttons";
import { FileItem } from "@/components/upload/file-item";
import { UploadZone } from "@/components/upload/upload-zone";

const fadeInVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
};

const fadeInUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
};

export default function UploadPage() {
    const {
        files,
        isUploading,
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
                <motion.h1
                    {...fadeInVariants}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-medium tracking-tight"
                >
                    Upload Files
                </motion.h1>

                <motion.div {...fadeInVariants} transition={{ delay: 0.2 }}>
                    <UploadZone
                        isUploading={isUploading}
                        isDragActive={isDragActive}
                        getRootProps={getRootProps}
                        getInputProps={getInputProps}
                    />

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
                                        uploadComplete={uploadComplete}
                                        onRemove={removeFile}
                                    />
                                ))}
                                <ActionButtons
                                    isUploading={isUploading}
                                    handleUpload={handleUpload}
                                    setFiles={setFiles}
                                    files={files}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.div {...fadeInUpVariants} transition={{ delay: 0.4 }} />
            </div>
        </div>
    );
}
