import { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";
import { SERVER_NAME } from "../SERVER_URL";

const ResultTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getServerData(`${SERVER_NAME}/api/result`, (res) => {
      setData(res);
    });
  });
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {!data ?? <div>No Data Found </div>}
          {data.map((val, i) => (
            <tr className="table-body" key={i}>
              <td>{val?.username || ""}</td>
              <td>{val?.attempts || 0}</td>
              <td>{val?.points || 0}</td>
              <td>{val?.achieved || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
