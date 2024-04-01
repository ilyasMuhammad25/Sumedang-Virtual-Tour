'use client';
import SectionTitle from "@/components/Common/SectionTitle";
import Image from "next/image";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid,Legend } from 'recharts';


const Statistik = () => {
  const data = [
    { job: 'Mahasiswa', age: 18, cluster: 0 },
    { job: 'PNS', age: 35, cluster: 0 },
    { job: 'Buruh', age: 40, cluster: 1 },
    { job: 'Pegawai Swasta', age: 45, cluster: 1 },
    { job: 'Petani', age: 20, cluster: 0 },
    { job: 'Guru/Dosen', age: 25, cluster: 0 },
    { job: 'Pelajar', age: 20, cluster: 0 },
    { job: 'Mahasiswa', age: 18, cluster: 0 },
    { job: 'PNS', age: 35, cluster: 0 },
    { job: 'Buruh', age: 40, cluster: 1 },
    { job: 'Pegawai Swasta', age: 45, cluster: 1 },
    { job: 'Petani', age: 20, cluster: 0 },
    { job: 'Guru/Dosen', age: 25, cluster: 0 },
    { job: 'Pelajar', age: 20, cluster: 0 },
    { job: 'Mahasiswa', age: 18, cluster: 0 },
    { job: 'PNS', age: 35, cluster: 0 },
    { job: 'Buruh', age: 40, cluster: 1 },
    { job: 'Pegawai Swasta', age: 45, cluster: 1 },
    { job: 'Petani', age: 20, cluster: 0 },
    { job: 'Guru/Dosen', age: 25, cluster: 0 },
    { job: 'Pelajar', age: 20, cluster: 0 },
    { job: 'Mahasiswa', age: 18, cluster: 0 },
    { job: 'PNS', age: 35, cluster: 0 },
    { job: 'Buruh', age: 40, cluster: 1 },
    { job: 'Pegawai Swasta', age: 45, cluster: 1 },
    { job: 'Petani', age: 20, cluster: 0 },
    { job: 'Guru/Dosen', age: 25, cluster: 0 },
    { job: 'Pelajar', age: 20, cluster: 0 },
  ];
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
      <SectionTitle
                title="Clustering Pengunjung Wisata Kab. Sumedang menggunakan KNN Algoritma"
                paragraph="Clustering ini masih menggunakan data sample"
                mb="44px"
              />
        <div className="-mx-4 flex flex-wrap items-center">
        <ScatterChart width={400} height={400}>
      <CartesianGrid />
      <XAxis type="category" dataKey="job" name="Pekerjaan" />
      <YAxis type="number" dataKey="age" name="Usia" />
      <Scatter name="Cluster 0" data={data.filter((d) => d.cluster === 0)} fill="green" />
      <Scatter name="Cluster 1" data={data.filter((d) => d.cluster === 1)} fill="red" />
      <Legend />
    </ScatterChart>
        </div>
      </div>
    </section>
  );
};

export default Statistik;
