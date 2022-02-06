import React from "react"

const ClientForm = () => {
  return (
    <form action="" method="POST" class="container">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <label class="label">Client Name</label>
                    <input class="input" type="text" placeholder="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <label class="label">Client Logo</label>
                    <input class="input" type="text" placeholder="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <label class="label">Client Logo</label>
                    <input class="input" type="text" placeholder="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <label class="label">Work Description</label>
                    <textarea
                      class="textarea"
                      rows="10"
                      placeholder=""
                    ></textarea>
                  </p>
                </div>
              </div>
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

export default ClientForm
