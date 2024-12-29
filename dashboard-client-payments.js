// Payment Data
const payments = [
    {
        paymentId: 'P001',
        orderId: '8639172',
        date: '2024-01-15',
        amount: '$250',
        status: 'Paid',
        details: {
            orderNumber: '8639172',
            title: 'Interdisciplinary Instructional Planning Project: Final',
            amountPaid: '$250',
            status: 'Paid',
            subject: 'Education',
            formatting: 'APA(7th Edition)',
            deadline: 'Dec 10, 2024 at 09:47 PM',
            instruction: 'PLEASE READ ATTACHED INSTRUCTIONS...',
            pages: '7.0 pages (1925 words, double spaced)',
            uploads: ['instructions.pdf', 'references.docx']
        }
    },
    {
        paymentId: 'P002',
        orderId: '8631566',
        date: '2024-01-10',
        amount: '$150',
        status: 'Pending',
        details: {
            orderNumber: '8631566',
            title: 'Interdisciplinary Instructional Planning Project: Lesson Plans 5-8',
            amountPaid: '$150',
            status: 'Pending',
            subject: 'Education',
            formatting: 'APA(7th Edition)',
            deadline: 'Nov 29, 2024 at 05:12 PM',
            instruction: 'PLEASE READ INSTRUCTIONS THROUGHLY!! THIS IS AN ONGOING ASSIGNMENT...',
            pages: '4.0 pages (1100 words, double spaced)',
            uploads: ['lesson5to8.pdf']
        }
    },
    {
        paymentId: 'P003',
        orderId: '8606520',
        date: '2024-01-12',
        amount: '$320',
        status: 'Paid',
        details: {
            orderNumber: '8606520',
            title: 'American Foreign Policy Analysis',
            amountPaid: '$320',
            status: 'Paid',
            subject: 'Other',
            formatting: 'MLA',
            deadline: 'Nov 23, 2024 at 03:52 AM',
            instruction: 'Write a 7-8 page research paper analyzing U.S. foreign policy...',
            pages: '8.0 pages (2200 words, double spaced)',
            uploads: ['analysis.pdf']
        }
    }
];

// Populate Payments Table
const paymentsTable = document.getElementById('paymentsTable');
payments.forEach(payment => {
    const row = `
        <tr>
            <td>${payment.paymentId}</td>
            <td><a href="#" class="view-order" onclick="viewOrderDetails('${payment.orderId}')">${payment.orderId}</a></td>
            <td>${payment.date}</td>
            <td>${payment.amount}</td>
            <td>${payment.status}</td>
        </tr>
    `;
    paymentsTable.insertAdjacentHTML('beforeend', row);
});

// View Order Details
function viewOrderDetails(orderId) {
    const payment = payments.find(p => p.orderId === orderId);

    if (payment) {
        document.getElementById('orderNumber').textContent = payment.details.orderNumber;
        document.getElementById('orderTitle').textContent = payment.details.title;
        document.getElementById('orderAmount').textContent = payment.details.amountPaid;
        document.getElementById('orderStatus').textContent = payment.details.status;

        document.getElementById('orderDetailsPopup').style.display = 'flex';
    }
}

// Close Order Details Popup
function closeOrderDetailsPopup() {
    document.getElementById('orderDetailsPopup').style.display = 'none';
}

// Redirect Add Payment Button to Payment Page
document.getElementById('addPaymentButton').addEventListener('click', () => {
    window.location.href = 'payment.html';
});

// Redirect Profile Picture to Profile Page
function openClientProfile() {
    window.location.href = 'dashboard-client-profile.html';
}
