import { Bar } from 'react-chartjs-2'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { barChartData } from '../data'

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const BarGraph = () => {
  const options = {}

  const data = barChartData

  return (
    <>
      <h1>Bar Chart</h1>
      <Bar data={data} options={options} />
    </>
  )
}
