import React from "react"

const PersonalProjectForm = () => {
  return (
    <form action="" method="POST" class="container">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field control">
                  <p class="control is-expanded">
                    <label class="label">Project Name</label>
                    <input class="input" type="text" placeholder="" />
                    <label class="label pt-3">Project Link</label>
                    <input class="input" type="text" placeholder="" />
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <label class="label">Project Images</label>
                    <input class="input" type="text" placeholder="Image 1" />
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Image 2" />
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input class="input" type="text" placeholder="Image 3" />
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
                    <label class="label">Project Description</label>
                    <textarea
                      class="textarea"
                      rows="14"
                      placeholder=""
                    ></textarea>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            
          </div>
          <div class="column"></div>
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

export default PersonalProjectForm
