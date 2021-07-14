import { FC, useMemo } from 'react'
import * as Highcharts from 'highcharts'
import HC_more from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'
import moment from 'moment'

HC_more(Highcharts)
import { ProductItem } from 'models'

interface LineChartProps extends HighchartsReact.Props {
  data: ProductItem[]
}

const LineChart: FC<LineChartProps> = ({ data, ...rest }) => {
  const options: Highcharts.Options = useMemo(() => {
    const temp = data
      .filter((item) => moment().startOf('day').isSameOrAfter(item.date))
      .map((item) => ({ x: new Date(item.date).getTime(), y: item.value }))

    const range = data
      .filter((item) => moment().startOf('day').isSameOrBefore(item.date))
      .map((item, index) => {
        if (index === 0) {
          return [new Date(item.date).getTime(), item.value, item.value]
        }
        return [new Date(item.date).getTime(), item.value * 0.95, item.value * 1.05]
      })

    console.log(temp, range, new Date().getTime())

    return {
      title: {
        text: undefined
      },
      series: [
        {
          type: 'line',
          data: temp,
          color: '#0094e0'
        },
        {
          type: 'arearange',
          data: range,
          color: '#0094e0'
        }
      ],
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      yAxis: {
        title: {
          text: null
        }
      },
      xAxis: {
        type: 'datetime',
        tickInterval: 24 * 3600 * 1000
      }
    }
  }, [data])

  return <HighchartsReact highcharts={Highcharts} options={options} {...rest} />
}

export { LineChart }
