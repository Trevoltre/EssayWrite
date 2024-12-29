// dashboard-client-orders.js
document.addEventListener("DOMContentLoaded", () => {
    const ordersTable = document.getElementById("ordersTable");
    const noOrders = document.getElementById("noOrders");

    const orders = [
        {
            id: "001",
            title: "Essay on Climate Change",
            status: "In Progress",
            price: "$50",
            category: "in-progress",
            type: "Essay",
            pages: 5,
            sources: 3,
            deadline: "2024-12-15",
            description: "Analyze recent climate data.",
            uploads: ["Draft1.docx", "References.pdf"]
        },
        {
            id: "002",
            title: "Research Paper on AI",
            status: "Completed",
            price: "$75",
            category: "completed",
            type: "Research Paper",
            pages: 10,
            sources: 5,
            deadline: "2024-11-01",
            description: "A detailed research on AI ethics.",
            uploads: ["FinalPaper.docx"]
        }
    ];

    const renderOrders = (category) => {
        const filteredOrders = orders.filter(order => order.category === category);
        const tbody = ordersTable.querySelector("tbody");
        tbody.innerHTML = "";

        if (filteredOrders.length > 0) {
            noOrders.style.display = "none";
            filteredOrders.forEach(order => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${order.id}</td>
                    <td>${order.title}</td>
                    <td>${order.status}</td>
                    <td>${order.price}</td>
                    <td><button onclick="viewOrderDetails(${JSON.stringify(order)})">View</button></td>
                `;
                tbody.appendChild(row);
            });
        } else {
            noOrders.style.display = "table-row";
        }
    };

    window.filterOrders = (category) => {
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
        document.querySelector(`[onclick="filterOrders('${category}')"]`).classList.add("active");
        renderOrders(category);
    };

    window.viewOrderDetails = (order) => {
        document.getElementById("orderType").textContent = order.type;
        document.getElementById("orderPages").textContent = order.pages;
        document.getElementById("orderSources").textContent = order.sources;
        document.getElementById("orderDeadline").textContent = order.deadline;
        document.getElementById("orderPrice").textContent = order.price;
        document.getElementById("orderDescription").textContent = order.description;
        document.getElementById("uploads").innerHTML = order.uploads.map(file => `<a href="#">${file}</a>`).join("<br>");
        document.getElementById("orderDetailsPopup").style.display = "flex";
    };

    window.closeOrderDetailsPopup = () => {
        document.getElementById("orderDetailsPopup").style.display = "none";
    };

    // Default to "In Progress" orders
    renderOrders("in-progress");
});
const orders = {
    'in-progress': [
        {
            id: '8639172',
            title: 'Interdisciplinary Instructional Planning Project: Final',
            status: 'In Progress',
            price: '$250',
            subject: 'Education',
            formatting: 'APA(7th Edition)',
            sources: '~',
            deadline: 'Dec 10, 2024 at 09:47 PM',
            instruction: 'PLEASE READ ATTACHED INSTRUCTIONS BEFORE ACCEPTING ORDER!! THIS IS THE FINAL PART OF AN ONGOING ASSIGNMENT THAT WILL NEED TO BE COMBINED UPON COMPLETION!! EACH FULL LESSON PLAN MUST CONTAIN CURRENT APA FORMATTED REFERENCES!!',
            pages: '7.0 pages (1925 words, double spaced)',
            uploads: ['instructions.pdf', 'references.docx']
        }
    ],
    'revision': [
        {
            id: '8631566',
            title: 'Interdisciplinary Instructional Planning Project: Lesson Plans 5-8',
            status: 'Revision',
            price: '$150',
            subject: 'Education',
            formatting: 'APA(7th Edition)',
            sources: '~',
            deadline: 'Nov 29, 2024 at 05:12 PM',
            instruction: 'PLEASE READ INSTRUCTIONS THROUGHLY!! THIS IS AN ONGOING ASSIGNMENT!! PLEASE MAKE SURE LESSONS ARE SOCIAL STUDIES, ARTS, PE/HEALTH, MATH.',
            pages: '4.0 pages (1100 words, double spaced)',
            uploads: ['lesson5to8.pdf']
        }
    ],
    'completed': [
        {
            id: '8606520',
            title: 'American Foreign Policy Analysis',
            status: 'Completed',
            price: '$320',
            subject: 'Other',
            formatting: 'MLA',
            sources: '15',
            deadline: 'Nov 23, 2024 at 03:52 AM',
            instruction: 'Write a 7-8 page research paper analyzing U.S. foreign policy toward a selected country or intergovernmental organization (IGO).',
            pages: '8.0 pages (2200 words, double spaced)',
            uploads: ['analysis.pdf']
        }
    ],
    'canceled': [
        {
            id: '8505123',
            title: 'Data Analytics Homework Assignment',
            status: 'Canceled',
            price: '$0',
            subject: 'Other',
            formatting: 'APA(6th Edition)',
            sources: '~',
            deadline: 'Nov 13, 2024 at 02:06 PM',
            instruction: 'Questions regarding datasets, Python, Tableau, SQL, and other software.',
            pages: '10.0 pages (2750 words, double spaced)',
            uploads: []
        }
    ],
    'on-hold': [
        {
            id: '8639999',
            title: 'Research Methodology and Proposal Draft',
            status: 'On Hold',
            price: '$180',
            subject: 'Research',
            formatting: 'APA(7th Edition)',
            sources: '10',
            deadline: 'Dec 15, 2024 at 12:00 PM',
            instruction: 'Complete research methodology with clear proposal structure.',
            pages: '6.0 pages (1500 words, double spaced)',
            uploads: ['proposal.pdf', 'references.docx']
        }
    ]
};
