import Layout from "../layout";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { selectInventoryRows } from "../store/inventories/slice";
import { useEffect } from "react";

import { setRows } from "../store/inventories/slice";

const Inventories = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100000,
    editable: true,
  });

  const dispatch = useDispatch();
  const rows = useSelector(selectInventoryRows);

  const { columns } = data;

  useEffect(() => {
    const { rows: dataRows } = data;
    dispatch(setRows(dataRows));
  }, [data]);

  console.log({ rows });
  return (
    <Layout pageName={"Inventories"}>
      <div style={{ height: 520, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
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
