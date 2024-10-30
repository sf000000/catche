import { FileWithPreview } from "@/common/types";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ActionButtonsProps {
    isUploading: boolean;
    handleUpload: () => void;
    setFiles: (files: FileWithPreview[]) => void;
    files: FileWithPreview[];
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
    isUploading,
    handleUpload,
    setFiles,
    files
}) => {
    return (
        <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => setFiles([])} disabled={isUploading}>
                Clear All
            </Button>
            <Button onClick={handleUpload} disabled={isUploading || files.some((f) => f.fileUrl)}>
                {isUploading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Uploading
                    </>
                ) : (
                    "Upload Files"
                )}
            </Button>
        </div>
    );
};
