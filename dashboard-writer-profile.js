// Handle Profile Form Submission
document.getElementById("profileForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    alert(`Profile updated successfully!\nName: ${name}\nEmail: ${email}\nAddress: ${address}`);
});

// Handle Profile Image Upload
document.getElementById("profileImageUpload").addEventListener("change", () => {
    const fileInput = document.getElementById("profileImageUpload");
    const profileImage = document.getElementById("profileImage");

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            profileImage.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
});
