import React from "react"

const SubscribeForm = () => {
  return (
    <form action="" method="POST" class="container">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <div class="field is-horizontal">
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded">
                    <input
                      class="input"
                      type="email"
                      placeholder="example@example.com"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <button className="button is-black is-rounded" type="submit">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  )
}

export default SubscribeForm
