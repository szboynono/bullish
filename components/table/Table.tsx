import { Table as ChakraTable, Thead, Tr, Td, Tbody, Th } from '@chakra-ui/react';
import { useMemo } from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { useTable, useSortBy } from 'react-table';

interface ColumnDetails {
  [key: string]: any
}

const Table = (props: any) => {

  const data = useMemo<ColumnDetails[]>(
    () => [
      {
        star: <AiOutlineStar />,
        rank: '1',
        price: '$0.01237012',
        twentyFour: '5%',
        sevenDays: '20%',
        marketCap: '$1000000000',
        volume: '$ 1000000000',
        supply: '21049124124 BTC',
      }
    ],
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'star',
      },
      {
        Header: '#',
        accessor: 'rank',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: '24%',
        accessor: 'twentyFour'
      },
      {
        Header: '7d%',
        accessor: 'sevenDays'
      },
      {
        Header: 'Market Cap',
        accessor: 'marketCap'
      },
      {
        Header: 'Volume(24h)',
        accessor: 'volume'
      },
      {
        Header: 'Supply',
        accessor: 'supply'
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <ChakraTable variant="simple" {...props}>
      <Thead>
      {headerGroups.map(headerGroup => (
        // eslint-disable-next-line react/jsx-key
        <Tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            // eslint-disable-next-line react/jsx-key
            <Th
              {...column.getHeaderProps()}
            >
              {column.render('Header')}
            </Th>
          ))}
        </Tr>
      ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
          {rows.map(
            (row, i) => {
              prepareRow(row);
              return (
                // eslint-disable-next-line react/jsx-key
                <Tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
                    )
                  })}
                </Tr>
              )}
          )}
        </Tbody>
    </ChakraTable>
  )
}

export default Table;