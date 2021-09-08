import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Table } from "antd";

const Data = () => {
  const { id } = useParams();
  const [info, setInfo] = useState([]);
  const [loading, setloading] = useState(true);
  const [dataSource, setdataSource] = useState([]);

  const createTableDS = () => {
    console.log("Here is the datas", info);
    var dataTemp = [];
    Object.keys(info).map((item, index) => {
      var dict = {};
      dict["key"] = index;
      dict["field"] = item;
      dict["value"] = info[item];
      dataTemp.push(dict);
    });
    setdataSource(dataTemp);
    setloading(false);
  };

  const columns = [
    {
      title: "Field",
      dataIndex: "field",
      key: "field",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];

  useEffect(() => {
    fetch(
      "https://research-wiki-backend.herokuapp.com/api/v1/resources?label=" + id
    )
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          setInfo(data[0]);
        } else {
          setInfo({ error: "There is no such data" });
        }
        createTableDS();
      });
  }, [id]);

  return (
    <div>
      <a style={{ fontSize: "38px" }}>RESEARCH WIKI</a>
      <br />
      <a style={{ fontSize: "18px" }}></a>

      {!loading && <Table dataSource={dataSource} columns={columns} loading={loading} style={{padding:"20px"}}/>}
    </div>
  );
};

export default Data;
