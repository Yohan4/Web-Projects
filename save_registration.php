<?php
// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get the raw JSON data from the request
  $jsonData = file_get_contents("php://input");

  // Decode the JSON data into an associative array
  $formData = json_decode($jsonData, true);

  // Check if the data is valid
  if ($formData) {
    // Generate a unique filename for each registration
    $filename = "registration_" . uniqid() . ".json";

    // Save the form data as JSON in a file on the server
    file_put_contents($filename, $jsonData);

    // Send a response back to the client
    http_response_code(200);
    echo "Registration data saved successfully!";
  } else {
    // Send an error response back to the client
    http_response_code(400);
    echo "Invalid data received.";
  }
} else {
  // Send an error response back to the client
  http_response_code(405);
  echo "Method Not Allowed.";
}
?>