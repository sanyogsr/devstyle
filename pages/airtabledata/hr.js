import { useEffect,useState } from "react";

function AirtableData2() {
    const [tableData, setTableData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch('/api/apidata/hr');
        const json = await res.json();
        setTableData(json.records);
      }
      fetchData();
    }, []);
      
  
    
    return (
      <>
  <div className="p-4">
  <h1 className="text-2xl font-bold mb-4">HR</h1>
  <table className="table-auto w-full">
    <thead>
      <tr>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">LinkedIn</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((record) => (
        <tr key={record.id}>
          <td className="border px-4 py-2">{record.fields['Name']}</td>
          <td className="border px-4 py-2">
            <a href={record.fields['LinkedIn']} target="_blank" className="text-blue-500 hover:text-blue-700">
              {record.fields['LinkedIn']}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  
  
  
  </>
    );
  }

  export default AirtableData2
