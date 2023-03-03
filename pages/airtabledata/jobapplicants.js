
import { useState,useEffect } from 'react';

function AirtableData1() {
    const [tableData, setTableData] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch('/api/apidata/job_applicants');
        const json = await res.json();
        setTableData(json.records);
      }
      fetchData();
    }, []);
  
  
    return (
      <>
   <div className="p-4">
  <h1 className="text-2xl font-bold mb-4">Job Applicants</h1>
  <div className="overflow-x-auto">
    <table className="table-auto border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">LinkedIn</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((record) => (
          <tr key={record.id}>
            <td className="border px-4 py-2">{record.fields['Name']}</td>
            <td className="border px-4 py-2">
              <a href={record.fields['LinkedIn']} target="_blank" className="text-blue-500 underline">{record.fields['LinkedIn']}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


  
  
  
  </>
    );
  }

  export default AirtableData1