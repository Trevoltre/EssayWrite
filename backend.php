<?php
header("Content-Type: application/json");

// Dummy data for orders
$orders = [
    ["id" => 12345, "status" => "In Progress", "amount" => 50.00],
    ["id" => 67890, "status" => "Completed", "amount" => 75.00],
];

echo json_encode($orders);
?>
