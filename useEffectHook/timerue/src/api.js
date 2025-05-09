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
/*
Function Call:

fetchBio('Alice') is called in the component when a person is selected.

Promise Creation:

Returns a new Promise, which waits 1 second (setTimeout).

Simulated Delay:

Mimics real-life API call delay (like waiting for server response).

Data Fetching:

Uses a local bios object to return a string based on the selected name.

Response:

After 1 second, it calls resolve(...) and sends back the selected biography.

useEffect Receives It:

In your component, .then(result => setBio(result)) updates the bio state.

✅ Why use this pattern?
Helps simulate async operations in React.

Useful in testing and learning React side-effects, state, and cleanup.

Prepares you for working with real APIs like fetch, axios, or backend calls.
 */
