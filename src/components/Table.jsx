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
    <div className='bill-table'>
      <h1 className='title'>Bills Table</h1>
      {billsArray.length === 0 && <h2>Loading Bills ...</h2>}
      {billsArray.map((bObj, id) => (
        <div key={id}>
          <table>
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
                <td>{bObj.prices}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default BillsList;
