import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
  accessKeyId: "AKIATVCNZMDNMAH4X4WJ",
  secretAccessKey: "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",
});

export const uploadFile = async (fileName: string, localFilePath: string) => {
  console.log("called");
  const fileContent = fs.readFileSync(localFilePath);
  const response = await s3
    .upload({
      Body: fileContent,
      Bucket: "vercel-clone-s3",
      Key: fileName,
    })
    .promise();
  console.log(response);
};
