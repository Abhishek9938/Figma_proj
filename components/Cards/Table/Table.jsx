import Table from '@mui/joy/Table';
import TableRow from '../TableRow/TableRow';
import { COLORS } from '../../../styles/colors';
import './Table.css'

const tableData = [
  {
    "name": "High Waist",
    "price": 79.49,
    "quantity": 82,
    "amount": 6518.18
  },
  {
    "name": "Marco Lightweight Shirt",
    "price": 128.50,
    "quantity": 37,
    "amount": 4754.50
  },
  {
    "name": "Half Sleeve Shirt",
    "price": 39.99,
    "quantity": 64,
    "amount": 2559.36
  },
  {
    "name": "Lightweight Jacket",
    "price": 20.00,
    "quantity": 184,
    "amount": 3680.00
  },
  {
    "name": "Marco Shoes",
    "price": 79.49,
    "quantity": 64,
    "amount": 1965.81
  }
]


export default function BasicTable() {
  return (
    <div className='basic-table' style={{ backgroundColor: `var(${COLORS.LIGHT})` }}>

      <h3 style={{ color: `var(${COLORS.BLACK100})` }}>Top Selling Products</h3>
      <Table aria-label="basic table">
        <thead>
          <tr >
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <TableRow  
              key={index}
              fullname={data.name}
              price={data.price}
              quantity={data.quantity}
              amount={data.amount}
              />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
