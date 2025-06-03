import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { AllCommunityModule, ModuleRegistry, type ColDef } from 'ag-grid-community'; 
import { AgGridReact, type CustomCellRendererProps } from 'ag-grid-react';
import WeirdNameRender from './WeirdName';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

interface IRow {
  testRender: string;
  failedCustomRenderer: { name: string; size: string };
}

function App() {
  const [rowData, setRowData] = useState<IRow[]>([
    {
      testRender: 'Test',
      failedCustomRenderer: { name: 'Test1234', size: '17071' },
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState<ColDef<IRow>[]>([
    {
      field: 'failedCustomRenderer',
      headerName: 'Test Failed Render',
      pinned: 'left',
      lockPinned: true,
      cellRenderer: WeirdNameRender,
      autoHeight: true,
    },
    { field: 'testRender', headerName: 'Test Render' }
  ]);

  return (
    <div className='testRender'>
      <div>Hello World</div>
    <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  )
}

export default App
