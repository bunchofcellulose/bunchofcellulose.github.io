---
title: "INAO Exam Analysis (2014-2025)"
description: "Topic-wise and Year-wise Analysis of Past INAO (Indian National Astronomy Olympiad) Exams"
date: 2024-01-01
prev: N
next: N
---

## Topic Distribution by Year

{{< chart >}}
type: 'bar',
options: {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true
    }
  }
},
data: {
  labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Misc (Astronomy)',
      data: [12, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#FF6384',
      borderColor: '#000000',
      borderWidth: 1
    },
    {
      label: 'Celestial Mechanics',
      data: [36, 40, 0, 0, 18, 0, 15, 44, 20, 20, 26, 58],
      backgroundColor: '#36A2EB',
      borderColor: '#000000',
      borderWidth: 1
    },
    {
      label: 'Radiation',
      data: [0, 0, 15, 20, 9, 0, 18, 0, 0, 16, 6, 12],
      backgroundColor: '#FFCE56',
      borderColor: '#000000',
      borderWidth: 1
    },
    {
      label: 'Optics and Instruments',
      data: [15, 6, 6, 20, 11, 20, 0, 12, 15, 10, 11, 10],
      backgroundColor: '#4BC0C0',
      borderColor: '#000000',
      borderWidth: 1
    },
    {
      label: 'Coordinates and Time',
      data: [14, 0, 10, 7, 29, 0, 27, 18, 0, 0, 16, 0],
      backgroundColor: '#9966FF',
      borderColor: '#000000',
      borderWidth: 1
    },
    {
      label: 'Sky',
      data: [15, 10, 9, 15, 3, 50, 20, 0, 30, 39, 16, 5],
      backgroundColor: '#FF9F40',
      borderColor: '#000000',
      borderWidth: 1
    },
    {
      label: 'Physics, Math and Logic',
      data: [8, 29, 60, 38, 30, 30, 20, 6, 25, 15, 25, 15],
      backgroundColor: '#C9CBCF',
      borderColor: '#000000',
      borderWidth: 1
    }
  ]
}
{{< /chart >}}

## Average Marks by Topic

{{< chart >}}
type: 'bar',
options: {
  plugins: {
    legend: {
      display: false
    }
  }
},
data: {
  labels: ['Misc (Astronomy)', 'Celestial Mechanics', 'Radiation', 'Optics and Instruments', 'Coordinates and Time', 'Sky', 'Physics, Math and Logic'],
  datasets: [{
    label: 'Average Marks',
    data: [2.25, 23.08, 8.00, 11.33, 10.08, 17.67, 25.08],
    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#C9CBCF'],
    borderColor: '#000000',
    borderWidth: 1
  }]
}
{{< /chart >}}

## Key Insights

- **Most Covered Topic**: Questions solvable without astronomy knowledge (physics, math or logic based) (25.1% of total)
- **Second Most Covered**: Celestial Mechanics (23.1% of total)
- **Third Most Covered**: Sky knowledge: Moon, Sun and constellations (17.7% of total)
