import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";

const StateDashboard = () => {
  const location = useLocation();
  const stateName = location.state;
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/crimeData?state=${stateName}`
        );
        console.log(response.data);
        setRowData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [stateName]);

  const columnDefs = [
    { headerName: "Year", field: "year" },
    { headerName: "Rape", field: "rape" },
    { headerName: "Kidnap and Assault", field: "kidnap_and_assault" },
    { headerName: "Dowry Deaths", field: "dowry_deaths" },
    { headerName: "Assault Against Women", field: "assault_against_women" },
    {
      headerName: "Assault Against Modesty of Women",
      field: "assault_against_modesty_of_women",
    },
    { headerName: "Domestic Violence", field: "domestic_violence" },
    { headerName: "Women Trafficking", field: "women_trafficking" },
  ];

  return (
    <div className="space-y-5">
      <h2 className="text-lg mt-4">Crimes against Women in {stateName}</h2>
      <div style={{ height: 550, width: "100%" }}>
        <AgGridReact
          columnDefs={columnDefs as any[]}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
          theme={themeQuartz}
        />
      </div>
    </div>
  );
};

export default StateDashboard;
