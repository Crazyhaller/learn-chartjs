export const lineChartData = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  datasets: [
    {
      label: 'Steps',
      data: [3000, 3500, 4700, 5000, 6340, 6800, 7000],
      borderColor: '#3e95cd',
    },
    {
      label: 'Calories',
      data: [2000, 2200, 2500, 2700, 3000, 3200, 3500],
      borderColor: '#8e5ea2',
    },
  ],
}

export const barChartData = {
  labels: [
    'Rent',
    'Groceries',
    'Utilities',
    'Entertainment',
    'Phone',
    'Transportation',
  ],
  datasets: [
    {
      label: 'Monthly Expenses',
      data: [500, 300, 200, 150, 100, 50],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 0.9)',
        'rgba(153, 102, 255, 0.9)',
        'rgba(255, 159, 64, 0.9)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 206, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
      ],
      borderWidth: 1,
    },
  ],
}

export const pieChartData = {
  labels: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn'],
  datasets: [
    {
      label: 'Time Spent',
      data: [20, 30, 15, 35],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',
        'rgba(54, 162, 235, 0.9)',
        'rgba(255, 206, 86, 0.9)',
        'rgba(75, 192, 192, 0.9)',
      ],
      hoverOffset: 4,
    },
  ],
}
