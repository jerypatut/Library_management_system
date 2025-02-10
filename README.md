# Library-Apps

**library Apps**
This web-based library information system uses **microservices** architecture with **MERN Stack** technology (MongoDB, Express, ReactJS, Node.js).

---

## **Application Running Guide**

### **Software to Install:**

1. **Node.js**
To run the backend and frontend servers.
2. **MongoDB (local or Atlas)**
Used as a database to store book data, users, and others.
3. **Browser**
To access the application (Google Chrome, Mozilla Firefox, or others).

---

### **Environment File Configuration (.env)**

#### **Backend (`book-app-backend`)**

Create a `.env` file in the `book-app-backend` folder with the following contents:

```
MONGODB_LOCAL = mongodb://127.0.0.1:27017/perpus
MONGODB_ATLAS = mongodb+srv://example.url
PORT = 5000
HOST = smtp.gmail.com
USER = jerynana76@gmail.com
PASS = apppasword from email bro
BASE_URL = http://localhost:5000
SERVICE = gmail
```

#### **Frontend (`book-app-frontend`)**

Create a `.env` file in the `book-app-frontend` folder with the following contents: here:

```
REACT_APP_BASE_URI = http://localhost:3000
REACT_APP_API_URI = http://localhost:5000
```

---

### **Steps to Run the Application**

1. Open the terminal and go to each folder:
- `book-app-backend`
- `book-app-frontend`
2. Run the following command to install the dependency:
```
npm install
```
3. Run the backend and frontend servers using:
```
npm start
```

---

## **Application Explanation**

This application uses a **microservices** architecture that separates **backend** and **frontend**. The backend provides a REST Server, while the frontend acts as a REST Client to access data. Technologies used:

- **Backend**: Express.js and MongoDB for REST Server and database.
- **Frontend**: ReactJS to build the user interface with React Router DOM for navigation between pages. Bootstrap version 5 is used for interface design.
- **Authentication**: Using JSON Web Token (JWT) to authenticate users and manage access.

---

## **Features and User Roles**

This application has three types of users with different access:

### **1. SUPER ADMIN Role**

Super Admin has full access to:

- Add, read, edit, and delete book data.
- Read, edit, and delete users.

![Super Admin Screenshot](/screensut/ROLEUSERS.png)

---

### **2. ADMIN Role**

Admin has limited access to:

- Add, read, edit, and delete book data.

![Admin Screenshot](/screensut/roledua.png)

---

### **3. Role USER/User**

User only has access to read available book data.

![User Screenshot](/screensut/role3.png)

---

## **Main Features**

### **4. Account Registration**

- New users can register by entering their name, email, password, and role. The role is automatically set as "User".
- Passwords will be hashed using bcrypt before being stored in the database.

![Registration Screenshot](/screensut/REGISTER.png)

---

### **5. User Login**

- Users can log in using their email and password.
- If validation is successful, a JWT token will be created and stored in local storage along with user data.

![Login Screenshot](/screensut/login.png)

---

### **6. Forgot Password**

- Users can reset their password by entering a valid email.
- Password reset link is sent via email.

![Forgot Password Screenshot](/screensut/LUPAPASSWORD.png)

---

### **7. Home**

- Contains general information about the library.

![Home Screenshot](/screensut/home.js.png)

---

### **8. Book List**

- Displays a list of available books, including:
- Barcode
- Book title
- Publisher
- Author
- Year and place of publication

![Book List Screenshot](/screensut/home.js.png)

---

### **9. About the Library**

- Contains detailed information about the library.

![About Library Screenshot](/screenshot/tetangperpustakaan.png)

---

### **10. Logout**

- JWT token and user data will be deleted from local storage.
- User will be redirected to login page.

By @jerypatut
