import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Title, Tooltip } from 'chart.js'
import { pieChartData } from '../data'

Chart.register(ArcElement, Title, Tooltip)

export const PieGraph = () => {
  const options = {}

  const data = pieChartData

  return (
    <>
      <h1>Pie Chart</h1>
      <Pie data={data} options={options} />
    </>
  )
}
