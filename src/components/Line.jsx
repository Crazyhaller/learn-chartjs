import { Line } from 'react-chartjs-2'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { lineChartData } from '../data'

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const LineGraph = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Weekly Steps Graph',
        font: {
          size: 15,
        },
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: 'black',
          font: {
            size: 12,
          },
        },
      },
    },
  }

  const data = lineChartData

  return (
    <>
      <h1>Line Chart</h1>
      <Line data={data} options={options} />
    </>
  )
}
