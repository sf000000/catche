import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Cloud, UploadCloud } from "lucide-react";

interface DropzoneRootProps {
    onClick?: () => void;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onDrop?: (event: React.DragEvent) => void;
    onDragEnter?: (event: React.DragEvent) => void;
    onDragLeave?: (event: React.DragEvent) => void;
    onDragOver?: (event: React.DragEvent) => void;
    tabIndex?: number;
    role?: string;
    "aria-label"?: string;
}

interface DropzoneInputProps {
    type?: string;
    multiple?: boolean;
    accept?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface UploadZoneProps {
    isUploading: boolean;
    isDragActive: boolean;
    getRootProps: () => DropzoneRootProps;
    getInputProps: () => DropzoneInputProps;
}

export const UploadZone = ({
    isUploading,
    isDragActive,
    getRootProps,
    getInputProps
}: UploadZoneProps) => {
    return (
        <div
            {...getRootProps()}
            className={cn(
                "border-2 border-dashed rounded-lg p-8 text-center space-y-4 transition-colors cursor-pointer dark:hover:bg-secondary/10 hover:bg-secondary/50 duration-200 ease-in-out h-96 flex items-center justify-center",
                isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25",
                isUploading && "pointer-events-none opacity-60"
            )}
        >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-2">
                <motion.div
                    animate={{ scale: isDragActive ? 1.1 : 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                    {isDragActive ? (
                        <UploadCloud className="h-10 w-10 text-primary" />
                    ) : (
                        <Cloud className="h-10 w-10 text-muted-foreground" />
                    )}
                </motion.div>
                <p className="mt-2 text-sm text-muted-foreground">
                    Drag &apos;n&apos; drop files here, or click to select files
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                    Max {process.env.MAX_FILES} files, up to {process.env.MAX_FILE_SIZE}MB each
                </p>
            </div>
        </div>
    );
};
