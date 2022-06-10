import { useEffect, useState } from 'react';

function BillsList() {
  const [billsArray, setBillsArray] = useState([]);
  async function getBills() {
    const resp = await fetch(`https://believed-shore-vanadium.glitch.me`);
    const dataInJs = await resp.json();
    setBillsArray(dataInJs);
  }
  useEffect(() => {
    getBills();
  });
  return (
    <div className='bill-table-container'>
      <h1 className='title'>Bills Table</h1>
      {billsArray.length === 0 && <h2>Loading Bills ...</h2>}
      {billsArray.map((bObj, id) => (
        <table className='bill-table' key={id}>
          <thead>
            <tr>
              <th>Bill id</th>
              <th>Number of People</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{bObj.id}</td>
              <td>{bObj.people}</td>
              <td>{bObj.price}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default BillsList;
