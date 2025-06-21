# 🛍️ Om Sai – Spiritual E-commerce Website

A full-stack e-commerce platform built with **React.js**, **Node.js**, and **MongoDB** for selling spiritual and devotional products like idols, puja kits, books, and more.

---

## 🌟 Project Highlights

- 🔒 Secure authentication (JWT-based)
- 🛒 Full shopping cart & checkout system
- 📦 Product management for admin
- 📱 Responsive and mobile-friendly design
- 🌐 REST API backend with Express.js
- ☁️ Deployment-ready using Vercel and Render

---

## 🧱 Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Frontend     | React.js, Tailwind CSS |
| Backend      | Node.js, Express.js    |
| Database     | MongoDB + Mongoose     |
| Authentication | JSON Web Tokens (JWT) |
| Deployment   | Vercel (Frontend), Render (Backend) |

---

## ✨ Features

### 🔹 User Features
- Browse all spiritual products
- View product details with image, price, and description
- Add/remove products from cart
- Place orders with checkout
- Register/Login with secure JWT

### 🔹 Admin Features
- Add, edit, delete products
- View all orders
- Manage inventory (optional extension)

---

## 📁 Project Structure

om-sai-ecommerce/
├── client/ # Frontend (React)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.js
├── server/ # Backend (Node + Express)
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/om-sai-ecommerce.git
cd om-sai-ecommerce
2. Start the Backend
bash
Copy
Edit
cd server
npm install
# Create a .env file (see below)
npm start
3. Start the Frontend
bash
Copy
Edit
cd client
npm install
npm start
🔐 Environment Variables (.env in /server)
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
📦 API Endpoints
Method	Route	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	User login
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/cart	Add item to cart
POST	/api/order	Place an order
GET	/api/admin/orders	Admin - view orders

🌐 Live Demo
Coming Soon... (after deployment)

🧑‍💻 Author
Vaibhav Singh
GitHub • LinkedIn

🙏 Inspired By
Devotional vibes and the blessings of Sai Baba ✨

Need for a clean, spiritual e-commerce platform

📜 License
This project is open-source and available under the MIT License.

yaml
Copy
Edit

---

Would you like me to generate a sample `.env` file or upload this directly to a GitHub repo template for y
