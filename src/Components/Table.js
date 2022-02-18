import React, { useEffect, useState } from "react";
import RowItem from "./RowItem";
import DropDowm from "./DropDown";
import axios from "axios";
function Table() {
  const api = axios.create({
    baseURL: `http://localhost:3000`,
  });

  const [NftDetail, SetNftDetail] = useState([]);
  const [Fiat, SetFiat] = useState("USD");

  useEffect(() => {
    async function fetchData() {
      const detail = await api.get("/floor-price/tofu/meta-warden");
      const detail2 = await api.get("/floor-price/opensea/cdao");
      SetNftDetail([...NftDetail, detail.data, detail2.data]);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <DropDowm />
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
          {NftDetail.map((item) => (
            <RowItem
              key={item.id}
              name={item.name}
              price={item.price}
              c_currency={item.c_currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
