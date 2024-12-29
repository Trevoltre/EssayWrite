-- Database Schema for TopWrite Essay

-- Users Table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('client', 'writer', 'admin') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders Table
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    subject VARCHAR(100) NOT NULL,
    pages INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    deadline DATETIME NOT NULL,
    job_type VARCHAR(50) NOT NULL,
    work_type VARCHAR(50) NOT NULL,
    status ENUM('Pending', 'In Progress', 'Completed', 'Cancelled') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Messages Table
CREATE TABLE messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    sender_id INT NOT NULL,
    recipient_id INT NOT NULL,
    content TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (sender_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (recipient_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Writers Ratings Table
CREATE TABLE writer_ratings (
    rating_id INT AUTO_INCREMENT PRIMARY KEY,
    writer_id INT NOT NULL,
    rating DECIMAL(3, 2) NOT NULL CHECK (rating BETWEEN 1.00 AND 5.00),
    success_rate DECIMAL(5, 2) NOT NULL CHECK (success_rate BETWEEN 75.00 AND 100.00),
    completed_orders INT NOT NULL,
    FOREIGN KEY (writer_id) REFERENCES users(user_id) ON DELETE CASCADE
);
