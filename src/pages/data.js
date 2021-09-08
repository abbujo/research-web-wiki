import { useParams } from "react-router";

const Data = () => {
  const { id } = useParams();
  
  fetch("https://research-wiki-backend.herokuapp.com/api/v1/resources?label=" + id).then((res) => console.log(res));
  return (
    <div>
      <a style={{ fontSize: "38px" }}>RESEARCH WIKI</a>
      <br />
      <a style={{ fontSize: "18px" }}></a>
      <p>{id}</p>
    </div>
  );
};

export default Data;
