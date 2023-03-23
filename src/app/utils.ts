export const formatSearchText = (searchText: string) => {
  const splitSearchText = searchText.split(/\s*"\s*/);

  const searchParts = splitSearchText.map((text, index) => {
    if (index % 2 === 0) {
      return text.split(/\s+/).join('+');
    } else {
      return text;
    }
  });

  return searchParts.filter((part) => part).join('+');
};
