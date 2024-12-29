const orders = [
    { id: "WR001", title: "Essay on Climate Change", status: "In Progress", deadline: "2024-02-15" },
    { id: "WR002", title: "Analysis of Economic Policies", status: "Revision", deadline: "2024-02-10" },
    { id: "WR003", title: "Research on Artificial Intelligence", status: "Completed", deadline: "2024-01-30" },
    { id: "WR004", title: "Technical Writing on Software Engineering", status: "Canceled", deadline: "2024-01-20" },
];

// Filter orders by category
function filterOrders(category) {
    const ordersTable = document.getElementById("ordersTable");
    ordersTable.innerHTML = "";

    const filteredOrders = orders.filter(order => order.status.toLowerCase() === category.toLowerCase());

    filteredOrders.forEach(order => {
        const row = `
            <tr>
                <td>${order.id}</td>
                <td>${order.title}</td>
                <td>${order.status}</td>
                <td>${order.deadline}</td>
                <td><button class="action-btn" onclick="viewOrderDetails('${order.id}')">View</button></td>
            </tr>
        `;
        ordersTable.insertAdjacentHTML("beforeend", row);
    });
}

// View Order Details in Popup
function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        document.getElementById("orderNumber").textContent = order.id;
        document.getElementById("orderTitle").textContent = order.title;
        document.getElementById("orderStatus").textContent = order.status;
        document.getElementById("orderDeadline").textContent = order.deadline;
        document.getElementById("orderDetails").textContent = "Detailed order information goes here.";
        document.getElementById("orderDetailsPopup").style.display = "flex";
    }
}

// Close Order Details Popup
function closeOrderDetailsPopup() {
    document.getElementById("orderDetailsPopup").style.display = "none";
}

// Initialize orders on page load
filterOrders("in-progress");
document.addEventListener("DOMContentLoaded", () => {
    const orders = [
        {
            id: "WR001",
            title: "Essay on Climate Change",
            status: "In Progress",
            deadline: "2024-12-15",
            description: "Analyze recent climate data and draft a 1500-word essay.",
            pages: 5,
            sources: 3,
            uploads: ["Draft.docx", "References.pdf"]
        },
        {
            id: "WR002",
            title: "Research Paper on AI Ethics",
            status: "Revision",
            deadline: "2024-11-20",
            description: "Review and improve the AI ethics research paper.",
            pages: 10,
            sources: 5,
            uploads: ["AI-Ethics.pdf"]
        },
        {
            id: "WR003",
            title: "Case Study: Business Strategy",
            status: "Completed",
            deadline: "2024-10-25",
            description: "Prepare a detailed case study on a business strategy.",
            pages: 8,
            sources: 6,
            uploads: ["CaseStudy.docx"]
        }
    ];

    const renderOrders = (category) => {
        const filteredOrders = orders.filter(order => order.status.replace(/\s/g, '-').toLowerCase() === category);
        const ordersBody = document.getElementById("ordersBody");
        ordersBody.innerHTML = "";

        filteredOrders.forEach(order => {
            const row = `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.title}</td>
                    <td>${order.status}</td>
                    <td>${order.deadline}</td>
                    <td><button class="action-btn" onclick='viewOrderDetails(${JSON.stringify(order)})'>View</button></td>
                </tr>
            `;
            ordersBody.insertAdjacentHTML("beforeend", row);
        });
    };

    window.filterOrders = (category) => {
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
        document.querySelector(`[onclick="filterOrders('${category}')"]`).classList.add("active");
        renderOrders(category);
    };

    window.viewOrderDetails = (order) => {
        document.getElementById("orderNumber").textContent = order.id;
        document.getElementById("orderTitle").textContent = order.title;
        document.getElementById("orderDeadline").textContent = order.deadline;
        document.getElementById("orderDescription").textContent = order.description;
        document.getElementById("orderPages").textContent = order.pages;
        document.getElementById("orderSources").textContent = order.sources;
        document.getElementById("orderUploads").innerHTML = order.uploads
            .map(file => `<a href="#">${file}</a>`)
            .join("<br>");
        document.getElementById("orderDetailsPopup").style.display = "flex";
    };

    window.closeOrderDetailsPopup = () => {
        document.getElementById("orderDetailsPopup").style.display = "none";
    };

    // Default to "In Progress" orders
    renderOrders("in-progress");
});
document.addEventListener("DOMContentLoaded", () => {
    const orders = {
        'in-progress': [
            { id: 'WR001', title: 'Essay on Climate Change', status: 'In Progress', deadline: '2024-02-15', details: 'Write a 1500-word essay on climate change.' },
            { id: 'WR002', title: 'Policy Analysis Report', status: 'In Progress', deadline: '2024-02-10', details: 'Analyze recent government policies.' },
            { id: 'WR003', title: 'Research Paper on AI Ethics', status: 'In Progress', deadline: '2024-02-05', details: 'Research AI ethics challenges.' }
        ],
        'revision': [
            { id: 'WR004', title: 'Economic Policy Analysis', status: 'Revision', deadline: '2024-01-25', details: 'Revise the economic policy analysis.' },
            { id: 'WR005', title: 'Sociological Essay', status: 'Revision', deadline: '2024-01-20', details: 'Expand the discussion section.' },
            { id: 'WR006', title: 'Case Study on Climate Change', status: 'Revision', deadline: '2024-01-15', details: 'Refine data analysis and recommendations.' }
        ],
        'completed': [
            { id: 'WR007', title: 'Business Strategy Case Study', status: 'Completed', deadline: '2024-01-05', details: 'Prepare a case study on business strategy.' },
            { id: 'WR008', title: 'Analysis of Renewable Energy', status: 'Completed', deadline: '2023-12-30', details: 'Review and finalize the renewable energy paper.' },
            { id: 'WR009', title: 'Essay on Social Inequality', status: 'Completed', deadline: '2023-12-20', details: 'Finalize the social inequality essay.' }
        ],
    };

    const renderOrders = (category) => {
        const ordersBody = document.getElementById("ordersBody");
        ordersBody.innerHTML = '';

        (orders[category] || []).forEach(order => {
            const row = `
                <tr>
                    <td>${order.id}</td>
                    <td>${order.title}</td>
                    <td>${order.status}</td>
                    <td>${order.deadline}</td>
                    <td><button class="action-btn" onclick='viewOrderDetails(${JSON.stringify(order)})'>View</button></td>
                </tr>
            `;
            ordersBody.insertAdjacentHTML("beforeend", row);
        });
    };

    const filterOrders = (category, button) => {
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderOrders(category);
    };

    window.viewOrderDetails = (order) => {
        document.getElementById("orderNumber").textContent = order.id;
        document.getElementById("orderTitle").textContent = order.title;
        document.getElementById("orderDeadline").textContent = order.deadline;
        document.getElementById("orderDetails").textContent = order.details;
        document.getElementById("orderDetailsPopup").style.display = "flex";
    };

    window.closeOrderDetailsPopup = () => {
        document.getElementById("orderDetailsPopup").style.display = "none";
    };

    // Default to "In Progress" orders
    renderOrders('in-progress');
});
