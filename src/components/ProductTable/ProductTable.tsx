import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useTable } from 'react-table'

import { ProductItem } from 'models'

const Styles = styled.div`
  ${tw`mt-6 w-full`}
  max-height: 80rem;
  overflow: auto;

  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      ${tw`m-0 px-6 py-2`}
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    td {
      ${tw`text-center`}
    }
  }
`

interface ProductTableProps {
  data: ProductItem[]
}

const ProductTable: React.FC<ProductTableProps> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Products',
        columns: [
          {
            Header: 'Date',
            accessor: 'date'
          },
          {
            Header: 'Product',
            accessor: 'product'
          },
          {
            Header: 'Value',
            accessor: 'value'
          }
        ]
      }
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data
  })

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Styles>
  )
}

export { ProductTable }
