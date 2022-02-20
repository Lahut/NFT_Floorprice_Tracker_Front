import React, { useEffect, useState } from "react";
import RowItem from "./RowItem";
import DropDowm from "./DropDown";
import axios from "axios";
function Table(props) {

  const [fiat,setFiat] = useState(true)

  const ToChangeFiat = () => {
    setFiat(!fiat)
  }
  return (
    <div className="container">
      <DropDowm changeFiat={ ToChangeFiat }/>
      <table className="table">
        <thead>
          <tr>
            <th>
              <abbr title="Position"></abbr>
            </th>
            <th>Name</th>
            <th>
              <abbr title="Played">Floor price</abbr>
            </th>
            <th>
              <abbr title="Drawn">Quantity</abbr>
            </th>
            <th>
              <abbr title="Drawn">value</abbr>
            </th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Net worth</th>
            <th>
              <abbr></abbr>
            </th>
            <th>
              <abbr></abbr>
            </th>
            <th>
              <abbr></abbr>
            </th>
            <th>
              <abbr>$$$</abbr>
            </th>
          </tr>
        </tfoot>
        <tbody>
          {props.nftDetail.map((item) => (
            <RowItem
              key={item.id}
              name={item.name}
              price={item.price}
              c_currency={item.c_currency}
              f_currency={fiat ? item.usd_currency : item.thb_currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
