document.addEventListener("DOMContentLoaded", () => {
    const paymentsTable = document.getElementById("paymentsTable");

    const orders = [
        { id: "P001", orderId: "8639172", date: "2024-01-15", amount: 250, status: "Paid", title: "Final Planning Project" },
        { id: "P002", orderId: "8631566", date: "2024-01-10", amount: 150, status: "Pending", title: "Lesson Plans 5-8" },
        { id: "P003", orderId: "8606520", date: "2024-01-12", amount: 320, status: "Paid", title: "Foreign Policy Analysis" },
        { id: "P004", orderId: "8505123", date: "2024-01-18", amount: 0, status: "Canceled", title: "Data Analytics Homework" },
        { id: "P005", orderId: "8734567", date: "2024-02-01", amount: 300, status: "Paid", title: "AI in Education Research" },
        { id: "P006", orderId: "8735678", date: "2024-02-05", amount: 200, status: "Pending", title: "Business Case Study" },
        { id: "P007", orderId: "8746789", date: "2024-02-08", amount: 400, status: "Paid", title: "Market Analysis Report" },
        { id: "P008", orderId: "8757890", date: "2024-02-10", amount: 500, status: "Paid", title: "Healthcare Management Essay" },
        { id: "P009", orderId: "8768901", date: "2024-02-12", amount: 350, status: "Pending", title: "Physics Lab Report" },
        { id: "P010", orderId: "8779012", date: "2024-02-15", amount: 0, status: "Canceled", title: "Literature Review" },
        { id: "P001", orderId: "8639172", date: "2024-01-15", amount: 250, status: "Paid", title: "Final Planning Project" },
        { id: "P002", orderId: "8631566", date: "2024-01-10", amount: 150, status: "Pending", title: "Lesson Plans 5-8" },
        { id: "P003", orderId: "8606520", date: "2024-01-12", amount: 320, status: "Paid", title: "Foreign Policy Analysis" },
        { id: "P004", orderId: "8505123", date: "2024-01-18", amount: 0, status: "Canceled", title: "Data Analytics Homework" },
        { id: "P005", orderId: "8734567", date: "2024-02-01", amount: 300, status: "Paid", title: "AI in Education Research" },
        { id: "P006", orderId: "8735678", date: "2024-02-05", amount: 200, status: "Pending", title: "Business Case Study" },
        { id: "P007", orderId: "8746789", date: "2024-02-08", amount: 400, status: "Paid", title: "Market Analysis Report" },
        { id: "P008", orderId: "8757890", date: "2024-02-10", amount: 500, status: "Paid", title: "Healthcare Management Essay" },
        { id: "P009", orderId: "8768901", date: "2024-02-12", amount: 350, status: "Pending", title: "Physics Lab Report" },
        { id: "P010", orderId: "8779012", date: "2024-02-15", amount: 120, status: "Canceled", title: "Literature Review" },
        { id: "P011", orderId: "8780123", date: "2024-02-20", amount: 200, status: "Paid", title: "Environmental Impact Analysis" },
        { id: "P012", orderId: "8791234", date: "2024-02-25", amount: 250, status: "Pending", title: "Social Media Campaign Report" },
        { id: "P013", orderId: "8802345", date: "2024-02-28", amount: 450, status: "Paid", title: "Economic Impact Study" },
        { id: "P014", orderId: "8813456", date: "2024-03-01", amount: 300, status: "Pending", title: "Technical White Paper" },
        { id: "P015", orderId: "8824567", date: "2024-03-05", amount: 350, status: "Paid", title: "Operations Management Analysis" },
        { id: "P016", orderId: "8835678", date: "2024-03-10", amount: 0, status: "Canceled", title: "Legal Compliance Study" },
        { id: "P017", orderId: "8846789", date: "2024-03-15", amount: 400, status: "Paid", title: "History Research Paper" },
        { id: "P018", orderId: "8857890", date: "2024-03-20", amount: 200, status: "Pending", title: "Statistics Final Report" },
        { id: "P019", orderId: "8868901", date: "2024-03-25", amount: 300, status: "Paid", title: "Creative Writing Piece" },
        { id: "P020", orderId: "8879012", date: "2024-03-30", amount: 150, status: "Pending", title: "Journal Article Summary" }
    ];

    const summaryElements = {
        pendingPayment: document.getElementById("pendingPayment"),
        upcomingPayments: document.getElementById("upcomingPayments"),
        recentPayments: document.getElementById("recentPayments"),
        totalPaid: document.getElementById("totalPaid"),
        canceledAmount: document.getElementById("canceledAmount"),
    };

    const calculateSummary = () => {
        let pendingPayment = 0;
        let upcomingPayments = 0; // Placeholder, currently unused
        let recentPayments = 0;
        let totalPaid = 0;
        let canceledAmount = 0;

        orders.forEach(order => {
            switch (order.status) {
                case "Pending":
                    pendingPayment += order.amount;
                    break;
                case "Paid":
                    recentPayments += order.amount;
                    totalPaid += order.amount;
                    break;
                case "Canceled":
                    canceledAmount += order.amount;
                    break;
            }
        });

        // Update summary elements
        summaryElements.pendingPayment.textContent = pendingPayment.toFixed(2);
        summaryElements.upcomingPayments.textContent = upcomingPayments.toFixed(2);
        summaryElements.recentPayments.textContent = recentPayments.toFixed(2);
        summaryElements.totalPaid.textContent = totalPaid.toFixed(2);
        summaryElements.canceledAmount.textContent = canceledAmount.toFixed(2);
    };

    const renderOrders = () => {
        paymentsTable.innerHTML = "";
        orders.forEach(order => {
            const row = `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.orderId}</td>
                    <td>${order.date}</td>
                    <td>$${order.amount}</td>
                    <td>${order.status}</td>
                </tr>
            `;
            paymentsTable.insertAdjacentHTML("beforeend", row);
        });
    };

    renderOrders();
    calculateSummary();

    window.closeOrderDetailsPopup = () => {
        document.getElementById("orderDetailsPopup").style.display = "none";
    };
});
