import { FC, useMemo } from 'react'
import * as Highcharts from 'highcharts'
import HC_more from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'
import moment from 'moment'

HC_more(Highcharts)
import { ProductItem } from 'models'
import { LOW_PERCENT, HIGH_PERCENT } from 'helpers/constants'

interface LineChartProps extends HighchartsReact.Props {
  data: ProductItem[]
}

const LineChart: FC<LineChartProps> = ({ data, ...rest }) => {
  const options: Highcharts.Options = useMemo(() => {
    const today = moment().startOf('day')
    const lineData = data
      .filter((item) => today.isSameOrAfter(item.date))
      .map((item) => ({ x: new Date(item.date).getTime(), y: item.value }))

    const rangeData = data
      .filter((item) => today.isSameOrBefore(item.date))
      .map((item, index) => {
        if (index === 0) {
          return [new Date(item.date).getTime(), item.value, item.value]
        }
        return [new Date(item.date).getTime(), item.value * LOW_PERCENT, item.value * HIGH_PERCENT]
      })

    return {
      title: {
        text: undefined
      },
      series: [
        {
          type: 'line',
          data: lineData,
          color: '#0094e0'
        },
        {
          type: 'arearange',
          data: rangeData,
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
