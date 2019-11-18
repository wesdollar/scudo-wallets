export const getSlug = title => {
  return title.replace(/ /g, "-").toLowerCase();
};
