//That JavaScript code is a simple example of fetching product data from an external API.
async function fetchProducts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        console.log("Products loaded successfully");
        return data;

    } catch (error) {
        console.error("API Error:", error);
    }
}

fetchProducts();
