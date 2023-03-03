import { useState,useEffect } from "react";

export default function Airtabledata3(){
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const res = await fetch('/api/apidata/founder');
        const json = await res.json();
        setTableData(json.records);
      }
      fetchData();
    }, []);

    return(
        <>
<div className="p-4">
  <h1 className="text-2xl font-bold mb-4">Founders</h1>
  <table className="table-auto w-full">
    <thead>
      <tr>
        <th className="px-4 py-2">Company Name</th>
        <th className="px-4 py-2">Website</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">LinkedIn</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((record) => (
        <tr key={record.id}>
          <td className="border px-4 py-2">{record.fields['Company Name']}</td>
          <td className="border px-4 py-2">
            <a href={record.fields['Website']} className="text-blue-500 hover:text-blue-700" target="_blank">
              {record.fields['Website']}
            </a>
          </td>
          <td className="border px-4 py-2">{record.fields['Name']}</td>
          <td className="border px-4 py-2">
            <a href={record.fields['LinkedIn']} className="text-blue-500 hover:text-blue-700" target="_blank">
              {record.fields['LinkedIn']}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
    )
}
