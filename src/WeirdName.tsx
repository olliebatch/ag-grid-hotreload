import type { CustomCellRendererProps } from "ag-grid-react";

const customRender = (params: CustomCellRendererProps) => {
    console.log(params)
  return (
    <div>Hello World 1231</div>
  );
};


export default customRender;