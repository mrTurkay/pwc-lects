import Layout from "../layout";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid } from "@mui/x-data-grid";

const Inventories = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100000,
    editable: true,
  });

  console.log({ data });
  return (
    <Layout pageName={"Inventories"}>
      <div style={{ height: 520, width: "100%" }}>
        <DataGrid
          {...data}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Layout>
  );
};

export default Inventories;
