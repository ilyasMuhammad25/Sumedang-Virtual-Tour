'use client'
import React from "react";
import SectionTitle from "../Common/SectionTitle";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: "Januari",
    wistawan: 590,
    pv: 800,
    amt: 1400
  },
  {
    name: "Februari",
    wistawan: 868,
    pv: 967,
    amt: 1506
  },
  {
    name: "Maret",
    wistawan: 1397,
    pv: 1098,
    amt: 989
  },
  {
    name: "April",
    wistawan: 1480,
    pv: 1200,
    amt: 1228
  },
  {
    name: "Mei",
    wistawan: 1520,
    pv: 1108,
    amt: 1100
  },
  {
    name: "Juni",
    wistawan: 1400,
    pv: 300,
    amt: 1700
  },
  {
    name: "Juli",
    wistawan: 1400,
    pv: 300,
    amt: 1800
  },
  {
    name: "Agustus",
    wistawan: 1500,
    pv: 300,
    amt: 1800
  },
  {
    name: "September",
    wistawan: 1500,
    pv: 300,
    amt: 1800
  },
  {
    name: "Oktober",
    wistawan: 1600,
    pv: 300,
    amt: 1800
  },
  {
    name: "November",
    wistawan: 1500,
    pv: 300,
    amt: 1800
  },
  {
    name: "Desember",
    wistawan: 1900,
    pv: 300,
    amt: 1800
  }
];

export default function Statistic() {
  return (
    <>
    <SectionTitle
            title="Analisis Statistik Wisatawan"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
    <div style={{ width: "100%", height: 300 }}>
    <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="wistawan" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="wistawan" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    </>
  );
}
