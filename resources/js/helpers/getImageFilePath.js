import { getSlug } from "./getSlug";

export const getImageFilePath = title => {
  const imgDirectory = "../img/vectors/";
  const parsedImgName = getSlug(title);
  const imageFile = `${parsedImgName}.jpg`;
  const fullPath = `${imgDirectory}${imageFile}`;

  return fullPath;
};
