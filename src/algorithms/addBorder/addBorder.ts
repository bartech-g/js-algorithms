function addBorder(picture: string[]): string[] {
  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*" + picture[i] + "*";
  }

  return picture;
}

console.log(addBorder(["abc", "ded"]));
