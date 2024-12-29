// Simulating dynamic orders loading
document.addEventListener("DOMContentLoaded", () => {
    const orderTable = document.getElementById("orderTable");

    // Example orders data
    const orders = [
        { id: "001", status: "In Progress", price: "$50" },
        { id: "002", status: "Completed", price: "$75" },
        { id: "003", status: "Awaiting Writer", price: "$30" },
    ];

    // Populate orders table
    orders.forEach(order => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.status}</td>
            <td>${order.price}</td>
            <td><button class="btn-action">View</button></td>
        `;
        orderTable.appendChild(row);
    });
});

// Handle profile form submission
document.getElementById("profileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Profile updated successfully!");
});
