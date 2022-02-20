import './App.css';
import React, { useEffect, useState } from "react";
import 'bulma/css/bulma.min.css';
import Table from './Components/Table';
import axios from "axios";
function App() {
  const api = axios.create({
    baseURL: `http://localhost:3000`,
  });
  const [NftDetail, SetNftDetail] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const detail = await api.get("/floor-price/tofu/meta-warden");
      const detail2 = await api.get("/floor-price/opensea/cdao");
      SetNftDetail([...NftDetail, detail.data, detail2.data]);
    }
    fetchData();
  }, []);
  return (
    <Table nftDetail={NftDetail}/>
  );
}

export default App;
