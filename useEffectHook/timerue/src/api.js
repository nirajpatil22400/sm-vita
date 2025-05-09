export function fetchBio(person) {
  const bios = person === "Bob" ? 2000 : 200;
  //or option
  //     {
  //     Alice: "Alice is a software engineer.",
  //     Bob: "Bob is a chemist.",
  //     Taylor: "Taylor is a designer.",
  //   };
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is " + person + "’s bio.");
      //   resolve(bios[person]);
    }, bios); //or option 1000);
  });
}
