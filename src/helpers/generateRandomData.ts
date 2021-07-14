import moment from 'moment'

export const generateRandomData = (startDate: string, endDate: string, product: number) => {
  const data = []
  const date = moment(startDate)

  while (moment(endDate).isSameOrAfter(date)) {
    data.push({
      date: date.format('YYYY-MM-DD'),
      product,
      value: +(Math.random() * 20).toFixed(0) + 100
    })
    date.add(1, 'days')
  }

  return data
}
