import './TableRow.css'
function TableRow({fullname,price,quantity,amount}) {
  return (  
      <tr style={{fontSize:"1em"}}>
        <td>{fullname}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>${amount}</td>
      </tr>
  );
}

export default TableRow