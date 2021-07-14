import { FC, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

import { StyledInput } from 'components/Common'
import { LineChart } from 'components/Chart'
import { ProductTable } from 'components/ProductTable'
import { generateRandomData } from 'helpers/generateRandomData'
import { Button } from 'components/Button'
import { ProductItem } from 'models'
import { Select } from 'components/Select'

const Div = styled.div`
  ${tw`grid grid-cols-1 lg:grid-cols-content gap-10 min-h-50 text-2xl`}
`

const DateRangeDiv = styled.div`
  ${tw`mb-10 space-x-4 space-y-4 md:space-x-10 md:space-y-0`}

  span {
    ${tw`text-2xl`}
  }
`

const Home: FC<RouteComponentProps> = () => {
  const [startDate, setStartDate] = useState('2021-07-08')
  const [endDate, setEndDate] = useState('2021-07-18')
  const [data, setData] = useState<ProductItem[]>([])
  const [product, setProduct] = useState<string>('')

  const handleGenerateData = () => {
    setData([...generateRandomData(startDate, endDate, 1), ...generateRandomData(startDate, endDate, 2)])
  }

  return (
    <Div>
      <div className="text-center">
        <DateRangeDiv>
          <span>Date Range :</span>
          <StyledInput type="date" narrow value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          <span>-</span>
          <StyledInput type="date" narrow value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </DateRangeDiv>
        <LineChart data={data.filter((item) => item.product === +product)} />
        <Select
          className="mt-8"
          placeholder="Choose product"
          value={product}
          narrow
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="1">Product 1</option>
          <option value="2">Product 2</option>
        </Select>
      </div>
      <div>
        <Button onClick={handleGenerateData}>Generate Data</Button>
        <ProductTable data={data} />
      </div>
    </Div>
  )
}

export { Home }
