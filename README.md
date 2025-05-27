# devconnect

# DevConnect - Developer Social Network

## 🚀 Project Title
**DevConnect** – A MERN stack social platform where developers can connect, share updates, and follow each other.

---

## 📝 Description

DevConnect is a full-stack social network application built using the MERN stack. It allows developers to:

- 👤 Sign up and log in securely using JWT authentication  
- 📝 Create and share posts  
- 👀 View a timeline of posts from followed users  
- ➕ Follow or unfollow other developers  
- 🌐 Explore other users and their profiles  

The frontend is built with **React.js**, styled using **TailwindCSS**, and the backend uses **Express.js** and **MongoDB** with **Mongoose**.

---

## 🔧 Installation & Setup Guide

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/devconnect.git



2. Backend Setup

cd server
npm install



Create a .env file in the server folder and add:




MONGODB_URI=mongodb+srv://tsaditya35:sPSyEOnNHWFDBqc6@firstproj.9bglr.mongodb.net/HelloWorld
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000



Start the backend server:
npm run dev


3. Frontend Setup
cd ../
npm install
npm run dev



💻 Key Features
✅ Authentication
JWT-based secure login system

Sign Up & Login pages with validation

🧑‍💻 Developer Profiles
View personal & other user profiles

Bio, followers, and following data

📝 Posts
Create short updates (like tweets)

Posts shown with timestamps

📥 Timeline
See posts from users you follow

🌍 Explore
Discover and follow other developers
