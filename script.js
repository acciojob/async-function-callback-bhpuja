const url = "https://jsonplaceholder.typicode.com/posts/1";
/*  your css code here. If applicable */
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

// Async function with a callback
async function fetchData(callback) {
  try {
    // Wait for the promise to resolve
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Call the callback function with the result
    callback(data.title);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Add event listener to the button
document.getElementById("btn").addEventListener("click", () => {
  fetchData((title) => {
    // Display the title in the div with id 'output'
    document.getElementById("output").textContent = `Title: ${title}`;
  });
});
//your JS code here. If required.
