import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Table } from "antd";

const Data = () => {
  const { id } = useParams();
  const [loading, setloading] = useState(true);
  const [dataSource, setdataSource] = useState([]);

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
        console.log(data);
        if (data[0]) {
          var info = data[0];
          var dataTemp = [];
          Object.keys(info).map((item, index) => {
            var dict = {};
            if (item !== "info") {
              dict["key"] = index;
              dict["field"] = item;
              dict["value"] = info[item];
              dataTemp.push(dict);
            }
          });
          setdataSource(dataTemp);
          setloading(false);
        } else {
          setdataSource([
            { key: "err", field: "error", value: "There is no such data" },
          ]);
          setloading(false);
        }
      });
  }, [id]);

  return (
    <div>
      <a style={{ fontSize: "38px" }}>RESEARCH WIKI</a>
      <br />
      <a style={{ fontSize: "18px" }}></a>

      {dataSource && (
        <Table
          dataSource={dataSource}
          columns={columns}
          loading={loading}
          style={{ padding: "20px" }}
        />
      )}
    </div>
  );
};

export default Data;
