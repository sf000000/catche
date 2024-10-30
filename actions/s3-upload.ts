"use server";

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
    region: process.env.AWS_REGION
});

export async function uploadToS3(formData: FormData) {
    try {
        const file = formData.get("file") as File;
        const buffer = Buffer.from(await file.arrayBuffer());
        const key = `uploads/${Date.now()}-${file.name}`;

        await s3.send(
            new PutObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: key,
                Body: buffer,
                ContentType: file.type
            })
        );

        return {
            success: true,
            fileUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
        };
    } catch (error) {
        console.error("S3 upload error:", error);
        return {
            success: false,
            error: "Failed to upload file"
        };
    }
}
