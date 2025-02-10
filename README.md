# Library Apps

**Library Apps**
This web-based library information system uses a **microservices** architecture with **MERN Stack** technology (MongoDB, Express, ReactJS, Node.js).

---

## **Application Run Guide**

### **Required Software:**

1. **Node.js**
   To run the backend and frontend servers.
2. **MongoDB (local or Atlas)**
   Used as a database to store book data, users, and more.
3. **Browser**
   To access the application (Google Chrome, Mozilla Firefox, or others).

---

### **Environment File Configuration (.env)**

#### **Backend (`book-app-backend`)**

Create a `.env` file in the `book-app-backend` folder with the following content:

```
MONGODB_LOKAL = mongodb://127.0.0.1:27017/library
MONGODB_ATLAS = mongodb+srv://example.url
PORT = 5000
HOST = smtp.gmail.com
USER = jerynana76@gmail.com
PASS = apppassword from email
BASE_URL = http://localhost:5000
SERVICE = gmail
```

#### **Frontend (`book-app-frontend`)**

Create a `.env` file in the `book-app-frontend` folder with the following content:

```
REACT_APP_BASE_URI = http://localhost:3000
REACT_APP_API_URI = http://localhost:5000
```

---

### **Steps to Run the Application**

1. Open a terminal and navigate to each folder:
   - `book-app-backend`
   - `book-app-frontend`
2. Run the following command to install dependencies:
   ```
   npm install
   ```
3. Start the backend and frontend servers using:
   ```
   npm start
   ```

---

## **Application Description**

This application uses a **microservices** architecture that separates the **backend** and **frontend**. The backend provides a REST Server, while the frontend acts as a REST Client to access data. The technologies used include:

- **Backend**: Express.js and MongoDB for the REST Server and database.
- **Frontend**: ReactJS for building the user interface with React Router DOM for page navigation. Bootstrap version 5 is used for interface design.
- **Authentication**: Uses JSON Web Token (JWT) to authenticate users and manage access.

---

## **Features and User Roles**

This application has three types of users with different access levels:

### **1. SUPER ADMIN Role**

Super Admin has full access to:

- Add, read, edit, and delete book data.
- Read, edit, and delete user data.

![Super Admin Screenshot](/screensut/ROLEUSERS.png)

---

### **2. ADMIN Role**

Admin has limited access to:

- Add, read, edit, and delete book data.

![Admin Screenshot](/screensut/roledua.png)

---

### **3. USER Role**

Users only have access to read available book data.

![User Screenshot](/screensut/role3.png)

---

## **Main Features**

### **4. Account Registration**

- New users can register by entering their name, email, password, and role. The role is automatically set as "User".
- Passwords are hashed using bcrypt before being stored in the database.

![Registration Screenshot](/screensut/REGISTER.png)

---

### **5. User Login**

- Users can log in using their email and password.
- If validation is successful, a JWT token is created and stored in local storage along with user data.

![Login Screenshot](/screensut/login.png)

---

### **6. Forgot Password**

- Users can reset their password by entering a valid email.
- A password reset link is sent via email.

![Forgot Password Screenshot](/screensut/LUPAPASSWORD.png)

---

### **7. Home Page**

- Contains general information about the library.

![Home Screenshot](/screensut/home.js.png)

---

### **8. Book List**

- Displays a list of available books, including:
  - Barcode code
  - Book title
  - Publisher
  - Author
  - Year and place of publication

![Book List Screenshot](/screensut/home.js.png)

---

### **9. About the Library**

- Contains detailed information about the library.

![About the Library Screenshot](/screensut/tetangperpustakaan.png)

---

### **10. Logout**

- JWT tokens and user data are removed from local storage.
- Users are redirected back to the login page.
  
  By jerypatut
