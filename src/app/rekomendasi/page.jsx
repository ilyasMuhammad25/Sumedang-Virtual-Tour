'use client';
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import { useState } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid,Legend } from 'recharts';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";

const Rekomendasi = () => {
  const [formData, setFormData] = useState({
    Pekerjaan: '',
    Usia: '',
    Asal: '',
    Lama_Berkunjung: '',
    spending_money: ''
  });
  const [prediction, setPrediction] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePrediction = (e) => {
    e.preventDefault();
    // List of possible recommended tourist destinations
    const attractions = ['Alun-Alun Kota Sumedang', 'Batu ciagung', 'Cipanas cileungsing', 'Gedung negara', 'Jatinangor National Flower Park'];
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * attractions.length);
    // Set the prediction to a random tourist destination
    setPrediction(attractions[randomIndex]);
  };
  
  const dummyData = [
    {
      Pekerjaan: 'Mahasiswa',
      Usia: 19,
      Asal: 'Sumatera Utara',
      Lama_Berkunjung: 12,
      'Spending money': 674393,
      Kepuasan: 'Not Satisfied',
      Rekomendasi_tempat: 'Museum'
    },
    {
      Pekerjaan: 'Siswa',
      Usia: 15,
      Asal: 'Australia',
      Lama_Berkunjung: 4,
      'Spending money': 893517,
      Kepuasan: 'Satisfied',
      Rekomendasi_tempat: 'Museum'
    },
    {
      Pekerjaan: 'PNS',
      Usia: 40,
      Asal: 'Canada',
      Lama_Berkunjung: 13,
      'Spending money': 247210,
      Kepuasan: 'Not Satisfied',
      Rekomendasi_tempat: 'Museum'
    },
    {
      Pekerjaan: 'Pegawai Swasta',
      Usia: 25,
      Asal: 'Australia',
      Lama_Berkunjung: 11,
      'Spending money': 630723,
      Kepuasan: 'Satisfied',
      Rekomendasi_tempat: 'Museum'
    },
    {
      Pekerjaan: 'PNS',
      Usia: 46,
      Asal: 'Australia',
      Lama_Berkunjung: 5,
      'Spending money': 338440,
      Kepuasan: 'Not Satisfied',
      Rekomendasi_tempat: 'Museum'
    }
  ];
  
 
  return (
    <section className="py-16 md:py-20 lg:py-28">
    <div className="container">
      <SectionTitle
        title="Rekomendasi Wisata Kab. Sumedang menggunakan KNN Algoritma"
        paragraph="Clustering ini masih menggunakan data sample"
        mb="44px"
      />
      <h1>Result</h1>
      <DataTable value={dummyData} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]}>
        <Column field="Pekerjaan" header="Pekerjaan" />
        <Column field="Usia" header="Usia" />
        <Column field="Asal" header="Asal" />
        <Column field="Lama_Berkunjung" header="Lama_Berkunjung" />
        <Column field="Spending money" header="Spending Money" />
        <Column field="Kepuasan" header="Kepuasan" />
        <Column field="Rekomendasi_tempat" header="Attraction Type" />
      </DataTable>
    </div>
    <div className="container">
    <form onSubmit={handlePrediction}>  
     <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Pekerjaan{" "}
                    </label>
                    <input
                      type="text"
                      name="Pekerjaan"
                      placeholder="Musukan Pekerjaan"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="Usia"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Usia{" "}
                    </label>
                    <input
                      type="text"
                      name="Usia"
                      placeholder="Tuliskan daerah asal anda"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="Asal"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Asal{" "}
                    </label>
                    <input
                      type="text"
                      name="Asal"
                      placeholder="Masukan daerah asal"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8">
                    <label
                      htmlFor="Asal"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Lama Berkunjung{" "}
                    </label>
                    <input
                      type="text"
                      name="Lama_Berkunjung"
                      placeholder="Masukan daerah asal"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="Asal"
                      className="mb-3 block text-sm text-dark dark:text-white"
                    >
                      {" "}
                      Spending money{" "}
                    </label>
                    <input
                      type="text"
                      name="spending_money"
                      placeholder="Masukan kemungkinan uang yang dihabiskan"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                  <div className="mb-8 flex">
                    <label
                      htmlFor="checkboxLabel"
                      className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="checkboxLabel"
                          className="sr-only"
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                          <span className="opacity-0">
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                fill="#3056D3"
                                stroke="#3056D3"
                                strokeWidth="0.4"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <span>
                        By creating account means you agree to the
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          Terms and Conditions{" "}
                        </a>
                        , and our
                        <a href="#0" className="text-primary hover:underline">
                          {" "}
                          Privacy Policy{" "}
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="mb-6">
                    <button className="shadow-submit dark:shadow-submit-dark flex w-full items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Prekdiksi
                    </button>
                  </div>
                </form>
                {prediction && (
          <div className="mt-6">
            <p className="text-lg font-semibold">Recommended Tourist Destination:</p>
            <p>{prediction}</p>
          </div>
        )}
                </div>

  </section>
  );
};

export default Rekomendasi;
