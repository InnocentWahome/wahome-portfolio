import * as React from "react"
import PersonalProjectForm from "../../../components/forms/PersonalProjectForm"
import AdminLayout from "../../../layouts/AdminLayout"

const AddQualificationsPage = () => {
  return (
    <AdminLayout>
      <div className="container pt-6 pl-6">
          <PersonalProjectForm />
      </div>
    </AdminLayout>
  )
}
export default AddQualificationsPage
