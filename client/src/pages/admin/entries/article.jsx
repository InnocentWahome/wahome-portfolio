// const AddQualificationsPage = () => {
//   return (
//     <AdminLayout>
//       <div className="container pt-6 pl-6">
//           <p>Here's all the articles we have</p>
//       </div>
//     </AdminLayout>
//   )
// }
// export default AddQualificationsPage

import * as React from "react"
import { DataGrid } from "@mui/x-data-grid"
import { useDemoData } from "@mui/x-data-grid-generator"
import AdminLayout from "../../../layouts/AdminLayout"

export default function PageSizeCustomOptions() {
  const [pageSize, setPageSize] = React.useState(5)

  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  })

  return (
    <AdminLayout>
      <div class="container">
        <div style={{ height: 650, width: "60%" }}>
          <DataGrid
            pageSize={pageSize}
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            {...data}
          />
        </div>
      </div>
    </AdminLayout>
  )
}
