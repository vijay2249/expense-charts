import ChartBar from './ChartBar'
import './Chart.css'


const Chart = (props) =>{
  let totalExpense = 0
  for(const dataPoint of props.dataPoints){
    totalExpense += dataPoint.value
  }

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint=>(
        <ChartBar 
          key={dataPoint.key}
          value={dataPoint.value} 
          total={totalExpense} 
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart