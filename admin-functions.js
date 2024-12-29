// Admin Functions for managing orders and users
const orders = [
    { id: "#98426001", user: "John Doe", status: "In Progress", price: "$50.00" },
    { id: "#98426002", user: "Jane Smith", status: "Completed", price: "$80.00" },
];

// Display all orders in the admin panel
function displayOrders() {
    const ordersTable = document.getElementById("ordersTable");
    ordersTable.innerHTML = ""; // Clear previous rows

    orders.forEach(order => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.user}</td>
            <td>${order.status}</td>
            <td>${order.price}</td>
        `;

        ordersTable.appendChild(row);
    });
}

// Add event listener for DOMContentLoaded to display orders
document.addEventListener("DOMContentLoaded", displayOrders);
