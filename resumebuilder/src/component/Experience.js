import React from "react";
import "./Resume.css";
import { useHistory } from "react-router-dom";

function Experience(props) {
  const [values, setValues] = props.sample;
  let history = useHistory();
  let change = (props) => {
    const { name, value } = props.target;
    setValues({ ...values, [name]: value });
  };

  const nextPage = () => {
    history.push("/Extra");
  };
  const prevPage = () => {
    history.push("/Projects");
  };
  return (
    <div align="center">
      <h2>EXPERIENCE DETAILS</h2>
      <br />

      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <h3>EXPERIENCE 1</h3>
                <label>
                  <input
                    onChange={change}
                    name="institute1"
                    type="text"
                    class="form-control"
                    placeholder="Institute/Organisation*"
                    value={values.institute1}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="position1"
                    type="text"
                    class="form-control"
                    placeholder="Position*"
                    value={values.position1}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="duration1"
                    type="text"
                    class="form-control"
                    placeholder="Duration*"
                    value={values.duration1}
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <label>
                  <input
                    onChange={change}
                    name="desc5"
                    className="desc3"
                    type="text"
                    class="form-control"
                    placeholder="Description*"
                    value={values.desc5}
                  />
                </label>
              </td>
            </tr>
            <br />
            <h3>EXPERIENCE 2</h3>
            <tr>
              <td>
                <label>
                  <input
                    onChange={change}
                    name="institute2"
                    type="text"
                    class="form-control"
                    placeholder="Institute/Organisation*"
                    value={values.institute2}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="position2"
                    type="text"
                    class="form-control"
                    placeholder="Position*"
                    value={values.position2}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="duration2"
                    type="text"
                    class="form-control"
                    placeholder="Duration*"
                    value={values.duration2}
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <tr>
              <td>
                <label>
                  <input
                    onChange={change}
                    name="desc6"
                    className="desc4"
                    type="text"
                    class="form-control"
                    placeholder="Description*"
                    value={values.desc6}
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <button
              className="back"
              type="submit"
              class="btn btn-dark"
              onClick={prevPage}
            >
              BACK
            </button>
            <button
              id="next4"
              type="submit"
              class="btn btn-danger"
              onClick={nextPage}
            >
              NEXT
            </button>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Experience;
