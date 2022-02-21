import React, { useEffect, useState } from "react";
import RowItem from "./RowItem";
import DropDowm from "./DropDown";
function Table(props) {
  const [fiat,setFiat] = useState(true)
  const [sumValue,setSumValue] = useState(0)

  useEffect( () => {
    let sum = 0
    if (fiat) {
      props.nftDetail.map((item) => 
        sum += item.usd_currency
      )
    }else{
      props.nftDetail.map((item) => 
        sum += item.thb_currency
      )
    }
    setSumValue(sum)
  })

  const ToChangeFiat = () => {
    setFiat(!fiat)
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
              <abbr>{numberWithCommas(Math.floor(sumValue))} {fiat ? '$' : '฿'}</abbr>
            </th>
          </tr>
        </tfoot>
        <tbody>
          {props.nftDetail.map((item,index) => (
            <RowItem
              key={index}
              name={item.name}
              price={item.price}
              c_currency={item.c_currency}
              f_currency={fiat ? item.usd_currency : item.thb_currency}
              url={item.url_project}
              comma={numberWithCommas}
              isUsd={fiat}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
