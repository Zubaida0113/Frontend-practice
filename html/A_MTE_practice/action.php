<?php
// Method to get data from an HTML form
function getFormData($method = 'POST') {
    $data = [];
    if (strtoupper($method) === 'POST') {
        foreach ($_POST as $key => $value) {
            $data[$key] = htmlspecialchars(trim($value));
        }
    } elseif (strtoupper($method) === 'GET') {
        foreach ($_GET as $key => $value) {
            $data[$key] = htmlspecialchars(trim($value));
        }
    }
    return $data;
}

// Example usage
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formData = getFormData('POST');
    <?php
var_dump($formData); // Debugging: Print the sanitized form data
}
?>