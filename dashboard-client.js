// dashboard-client.js
document.addEventListener("DOMContentLoaded", () => {
    // Open Support Popup
    window.openSupportPopup = () => {
        document.getElementById("supportPopup").style.display = "flex";
    };

    // Close Support Popup
    window.closeSupportPopup = () => {
        document.getElementById("supportPopup").style.display = "none";
    };

    // Handle Support Form Submission
    document.getElementById("supportForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const message = document.getElementById("supportMessage").value;

        // Simulate sending to support email
        alert(`Message sent to support:\n${message}`);
        closeSupportPopup();
    });
});
