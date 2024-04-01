'use client';
import React from 'react';
import { Scatter } from 'react-chartjs-2';

const ScatterPlot = ({ data }) => {
  // Persiapan data untuk scatter plot
  const scatterData = {
    datasets: [
      {
        label: 'Cluster 0',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: data.filter((d) => d.cluster === 0).map((d) => ({ x: d.job, y: d.age })),
      },
      {
        label: 'Cluster 1',
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: data.filter((d) => d.cluster === 1).map((d) => ({ x: d.job, y: d.age })),
      },
    ],
  };

  // Konfigurasi options untuk scatter plot
  const scatterOptions = {
    scales: {
      x: { // Updated from xAxes
        type: 'linear',
        scaleLabel: {
          display: true,
          labelString: 'Pekerjaan'
        },
      },
      y: { // Updated from yAxes
        type: 'linear',
        scaleLabel: {
          display: true,
          labelString: 'Usia'
        },
      }
    }
  };

  return <Scatter data={scatterData}/>;
};

export default ScatterPlot;
