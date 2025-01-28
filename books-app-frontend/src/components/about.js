import React from 'react';
import { Outlet } from 'react-router-dom';
import img1 from '../Assets/img/satu_perpustakaan.jpeg';
import { Header } from './header';
import Navbar from './navbar';

const About = () => {
  const title = 'Tentang ITB Swadarma';
  return (
    <div>
      <Navbar />
      <main>
        <div className="container py-4">
          <Header title={title} />
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Tentang ITB Swadarma</h1>
              <p className="col-md-8 fs-4">
                ITB Swadarma adalah salah satu perguruan tinggi yang berfokus
                pada pendidikan berbasis teknologi dan bisnis. <br />
                Institut ini memiliki visi untuk mencetak lulusan yang kompeten
                di bidang teknologi informasi dan bisnis, dengan kurikulum yang
                terus disesuaikan dengan kebutuhan industri.
              </p>
              <img
                src={img1}
                alt="Gambar ITB Swadarma"
                className="img-fluid img-thumbnail rounded"
              />
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>Mahasiswa ITB Swadarma</h2>
                <p>
                  Yeremias Pontianus Sugandri adalah salah satu mahasiswa di ITB
                  Swadarma, yang mengambil program studi Teknik Informatika.{' '}
                  <br />
                  Dengan tekad untuk menjadi seorang programmer andal, Yeremias
                  aktif mengikuti berbagai proyek dan kursus tambahan untuk
                  meningkatkan keterampilannya di bidang teknologi informasi.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>Jadwal Perkuliahan</h2>
                <p>
                  Jadwal perkuliahan di ITB Swadarma dirancang untuk memberikan
                  fleksibilitas bagi mahasiswa yang bekerja sambil kuliah.{' '}
                  <br />
                  Kelas dilaksanakan pada pagi, siang, dan malam hari sesuai
                  dengan kebutuhan mahasiswa. Selain itu, tersedia kelas online
                  untuk mendukung pembelajaran jarak jauh.
                </p>
              </div>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">
            &copy; Copyright {new Date().getFullYear()} ITB Swadarma
          </footer>
        </div>
      </main>
      <Outlet />
    </div>
  );
};

export default About;
