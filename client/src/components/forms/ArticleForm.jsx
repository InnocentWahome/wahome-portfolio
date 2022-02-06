import React from "react"
import { useState } from "react"

const ArticleForm = () => {
  // function App() {
  //   const [title, setTitle] = useState("")
  //   const [body, setBody] = useState("")

  //   const handleSubmit = async e => {
  //     e.preventDefault()
  //     try {
  //       const res = await fetch("http://localhost:3333/api/v1/artice", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           title: title,
  //           body: body,
  //         }),
  //       })
  //       const resJson = await res.json()
  //       if (res.status === 200) {
  //         setTitle("")
  //         setBody("")
  //         console.log("Article created successfully")
  //       } else {
  //         console.log("Some error occurred")
  //       }
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  // }
  return (
    <form  action="" method="POST" class="container">
      <div class="container">
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <label class="label">Article Title</label>
                <input class="input" type="text" placeholder="password" />
              </p>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <p class="control is-expanded">
                <label class="label">Article Body</label>
                <textarea
                  class="textarea"
                  rows="10"
                  placeholder=""
                ></textarea>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default ArticleForm
