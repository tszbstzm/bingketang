export const createLongcovers = (num: number) => {
  return Array.from({ length: num }, () => {
    let photoNum = 86;
    const notExistNum = [86, 97];
    while (notExistNum.includes(photoNum)) {
      photoNum = Math.ceil(Math.random() * 40) + 60;
    }
    return `https://picsum.photos/id/${photoNum}/1600/400`;
  });
};