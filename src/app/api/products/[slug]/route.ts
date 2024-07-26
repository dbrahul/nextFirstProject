// Define an asynchronous GET function to handle API requests
export async function GET(request: Request, { params }: any) {
  try {
    // Destructure the slug parameter from the params object
    const { slug } = params;

    // Make a fetch request to the dummy JSON API using the slug parameter
    const response = await fetch(`https://dummyjson.com/products/${slug}`);

    // Check if the response is not OK (status code outside the range 200-299)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    // Parse the response as JSON
    const data = await response.json();

    // Return a successful JSON response with the fetched data
    return Response.json({
      message: "Data fetched successfully",
      success: true,
      data: data.products,
    }, {
      status: 200
    });

  } catch (error) {
    // Log the error to the console for debugging
    console.log("This is error ", error);

    // Return a JSON response indicating an error occurred
    return Response.json({
      success: false,
      message: "An error occurred"
    }, {
      status: 500
    });
  }
}