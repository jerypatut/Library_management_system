import React from 'react';
import { Outlet } from 'react-router-dom';
import imgKegiatan3 from '../Assets/img/backend.png';
import imgKegiatan2 from '../Assets/img/jeri.jpg';
import imgKegiatan from '../Assets/img/Kampus-B-14.jpg';
import imgDescrib from '../Assets/img/tiga_perpustakaan.jpg';
import { Header } from './header';
import Navbar from './navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <div className="container py-4">
          <Header title={'Beranda'} />

          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">
                Tentang Yeremias Pontianus Sugandri
              </h1>
              <p className="col-md fs-4">
                Saya, Yeremias Pontianus Sugandri, adalah mahasiswa di ITB
                Swadarma. Saya memiliki ketertarikan dalam dunia teknologi,
                terutama dalam bidang pengembangan perangkat lunak dan sistem
                informasi. Kampus saya, ITB Swadarma, mendukung saya dalam
                mengejar mimpi dan mengembangkan potensi saya.
              </p>
              <img
                src={imgDescrib}
                alt="Gambar Yeremias Pontianus Sugandri"
                className="img-fluid img-thumbnail rounded"
              />
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-bg-dark rounded-3">
                <h2>Kegiatan</h2>
                <p>
                  Sebagai mahasiswa ITB Swadarma, saya, Yeremias Pontianus
                  Sugandri, aktif dalam berbagai kegiatan yang mendukung
                  pengembangan akademik dan keterampilan teknis.
                </p>
                <img
                  src={imgKegiatan}
                  alt="Gambar Kegiatan Yeremias Pontianus Sugandri"
                  className="img-fluid img-thumbnail rounded"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>Informasi</h2>
                <p>
                  Saya selalu mencari informasi terbaru yang dapat membantu
                  saya, Yeremias Pontianus Sugandri, untuk terus belajar dan
                  berkembang di ITB Swadarma. Kampus ini memberikan fasilitas
                  yang mendukung kebutuhan belajar saya.
                </p>
                <img
                  src={imgKegiatan3}
                  alt="Gambar Informasi Yeremias Pontianus Sugandri"
                  className="img-fluid img-thumbnail rounded"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>Informasi</h2>
                <p>
                  ITB Swadarma adalah tempat di mana saya, Yeremias Pontianus
                  Sugandri, belajar dan bertumbuh. Dengan fasilitas yang
                  tersedia, saya dapat meningkatkan kemampuan dan keahlian saya
                  di bidang teknologi.
                </p>
                <img
                  src={imgKegiatan2}
                  alt="Gambar Informasi ITB Swadarma"
                  className="img-fluid img-thumbnail rounded"
                />
              </div>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">
            &copy; Copyright {new Date().getFullYear()}
          </footer>
        </div>
      </main>
      <Outlet />
    </div>
  );
}

export default Home;
