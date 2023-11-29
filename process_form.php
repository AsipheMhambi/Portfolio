<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Your email address where you want to receive the messages
    $to = "amhambi95@gmail.com";

    // Subject of the email
    $subject = "New Contact Form Submission";

    // Message body
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";

    // Additional headers
    $headers = "From: $email";

    // Send email
    mail($to, $subject, $body, $headers);

    // Redirect to a thank-you page or display a success message
    header("Location: thank_you.html");
    exit();
}
?>
