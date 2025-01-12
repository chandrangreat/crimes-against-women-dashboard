import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";
import {
  AllCommunityModule,
  ModuleRegistry,
  ColDef,
  ICellRendererParams,
} from "ag-grid-community";
import axios from "axios";
import { Link } from "react-router-dom";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

interface CrimeData {
  id: number;
  state: string | null;
  year: number | null;
  rape: number | null;
  kidnap_and_assault: number | null;
  dowry_deaths: number | null;
  assault_against_women: number | null;
  assault_against_modesty_of_women: number | null;
  domestic_violence: number | null;
  women_trafficking: number | null;
}

export function StateRenderer(params: ICellRendererParams) {
  return (
    <Link to={params.value} state={params.value}>
      {params.value}
    </Link>
  );
}

const Home = () => {
  const [crimeData, setCrimeData] = useState<CrimeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const columnDefs: ColDef[] = [
    {
      headerName: "Index",
      valueGetter: "node.rowIndex + 1",
      width: 100,
    },
    {
      field: "state",
      headerName: "States",
      flex: 1,
      cellRenderer: StateRenderer,
    },
  ];

  const defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  useEffect(() => {
    const fetchCrimeData = async () => {
      try {
        const response = await axios.get<CrimeData[]>(
          "http://localhost:3000/crimeData"
        );
        setCrimeData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to get data");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchCrimeData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ height: 600, width: "100%" }}>
      <AgGridReact
        rowData={crimeData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        theme={themeQuartz}
      />
    </div>
  );
};

export default Home;
