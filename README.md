# Library-Apps

**library Apps**  
Sistem informasi perpustakaan berbasis web ini menggunakan arsitektur **microservices** dengan teknologi **MERN Stack** (MongoDB, Express, ReactJS, Node.js).

---

## **Panduan Menjalankan Aplikasi**

### **Software yang Harus Diinstal:**

1. **Node.js**  
   Untuk menjalankan server backend dan frontend.
2. **MongoDB (lokal atau Atlas)**  
   Digunakan sebagai database untuk menyimpan data buku, pengguna, dan lainnya.
3. **Browser**  
   Untuk mengakses aplikasi (Google Chrome, Mozilla Firefox, atau lainnya).

---

### **Konfigurasi File Environment (.env)**

#### **Backend (`book-app-backend`)**

Buat file `.env` di folder `book-app-backend` dengan isi seperti berikut:

```
MONGODB_LOKAL = mongodb://127.0.0.1:27017/perpus
MONGODB_ATLAS = mongodb+srv://example.url
PORT = 5000
HOST = smtp.gmail.com
USER = jerynana76@gmail.com
PASS = apppasword from email bro
BASE_URL = http://localhost:5000
SERVICE = gmail
```

#### **Frontend (`book-app-frontend`)**

Buat file `.env` di folder `book-app-frontend` dengan isi seperti berikut:

```
REACT_APP_BASE_URI = http://localhost:3000
REACT_APP_API_URI = http://localhost:5000
```

---

### **Langkah Menjalankan Aplikasi**

1. Buka terminal dan masuk ke masing-masing folder:
   - `book-app-backend`
   - `book-app-frontend`
2. Jalankan perintah berikut untuk menginstal dependency:
   ```
   npm install
   ```
3. Jalankan server backend dan frontend menggunakan:
   ```
   npm start
   ```

---

## **Penjelasan Aplikasi**

Aplikasi ini menggunakan arsitektur **microservices** yang memisahkan antara **backend** dan **frontend**. Backend menyediakan REST Server, sedangkan frontend bertindak sebagai REST Client untuk mengakses data. Teknologi yang digunakan:

- **Backend**: Express.js dan MongoDB untuk REST Server dan database.
- **Frontend**: ReactJS untuk membangun user interface dengan React Router DOM untuk navigasi antar halaman. Bootstrap versi 5 digunakan untuk desain antarmuka.
- **Autentikasi**: Menggunakan JSON Web Token (JWT) untuk mengautentikasi pengguna dan mengelola akses.

---

## **Fitur dan Role Pengguna**

Aplikasi ini memiliki tiga jenis pengguna dengan akses berbeda:

### **1. Role SUPER ADMIN**

Super Admin memiliki akses penuh untuk:

- Menambah, membaca, mengedit, dan menghapus data buku.
- Membaca, mengedit, dan menghapus pengguna.

![Super Admin Screenshot](/screensut/ROLEUSERS.png)

---

### **2. Role ADMIN**

Admin memiliki akses terbatas untuk:

- Menambah, membaca, mengedit, dan menghapus data buku.

![Admin Screenshot](/screensut/roledua.png)

---

### **3. Role USER/Pengguna**

User hanya memiliki akses untuk membaca data buku yang tersedia.

![User Screenshot](/screensut/role3.png)

---

## **Fitur Utama**

### **4. Registrasi Akun**

- Pengguna baru dapat mendaftar dengan memasukkan nama, email, password, dan role. Role otomatis diset sebagai "User".
- Password akan di-hash menggunakan bcrypt sebelum disimpan di database.

![Registrasi Screenshot](/screensut/REGISTER.png)

---

### **5. Login Pengguna**

- Pengguna dapat login menggunakan email dan password.
- Jika validasi berhasil, token JWT akan dibuat dan disimpan di local storage bersama data pengguna.

![Login Screenshot](/screensut/login.png)

---

### **6. Lupa Password**

- Pengguna dapat mengatur ulang password dengan memasukkan email yang valid.
- Link reset password dikirimkan melalui email.

![Lupa Password Screenshot](/screensut/LUPAPASSWORD.png)

---

### **7. Beranda**

- Berisi informasi umum tentang perpustakaan.

![Beranda Screenshot](/screensut/home.js.png)

---

### **8. Daftar Buku**

- Menampilkan daftar buku yang tersedia, termasuk:
  - Kode barcode
  - Judul buku
  - Penerbit
  - Pengarang
  - Tahun dan tempat terbit

![Daftar Buku Screenshot](/screensut/home.js.png)

---

### **9. Tentang Perpustakaan**

- Berisi informasi detail tentang perpustakaan.

![Tentang Perpustakaan Screenshot](/screensut/tetangperpustakaan.png)

---

### **10. Logout**

- Token JWT dan data pengguna akan dihapus dari local storage.
- Pengguna akan diarahkan kembali ke halaman login.
