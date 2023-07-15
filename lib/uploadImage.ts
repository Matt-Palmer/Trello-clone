import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "649a6f113fd15a1af402",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
