import * as React from "react"

import PageLayout from "../layouts/PageLayout"
import ContactForm from "../components/forms/ContactForm"

const ContactPage = () => {
  return (
    <PageLayout>
      <div className="container pt-6 pl-6">
        <ContactForm />
      </div>
    </PageLayout>
  )
}
export default ContactPage
