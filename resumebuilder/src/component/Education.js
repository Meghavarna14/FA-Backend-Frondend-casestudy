import React from "react";
import "./Resume.css";
import { useHistory } from "react-router-dom";

function Education(props) {
  const [values, setValues] = props.sample;
  let history = useHistory();
  let change = (props) => {
    const { name, value } = props.target;
    setValues({ ...values, [name]: value });
  };

  const nextPage = () => {
    history.push("/Projects");
  };
  const prevPage = () => {
    history.push("/");
  };
  return (
    <div align="center">
      <h2>EDUCATIONAL DETAILS</h2>
      <br />
      <br />
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  <input
                    onChange={change}
                    name="college"
                    type="text"
                    class="form-control"
                    placeholder="College/University*"
                    value={values.college}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="date1"
                    type="date"
                    class="form-control"
                    placeholder="dd-mm-yyyy"
                    value={values.date1}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="date2"
                    type="date"
                    class="form-control"
                    placeholder="dd-mm-yyyy"
                    value={values.date2}
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
                    name="qualification1"
                    type="text"
                    class="form-control"
                    placeholder="Qualification*"
                    value={values.qualification1}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="desc1"
                    className="desc1"
                    type="text"
                    class="form-control"
                    placeholder="Description*"
                    value={values.desc1}
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
                    name="school"
                    type="text"
                    class="form-control"
                    placeholder="School*"
                    value={values.school}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="date3"
                    type="date"
                    class="form-control"
                    placeholder="dd-mm-yyyy"
                    value={values.date3}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="date4"
                    type="date"
                    class="form-control"
                    placeholder="dd-mm-yyyy"
                    value={values.date4}
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
                    name="qualification2"
                    type="text"
                    class="form-control"
                    placeholder="Qualification*"
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="desc2"
                    className="desc2"
                    type="text"
                    class="form-control"
                    placeholder="Description*"
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
              id="next2"
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
export default Education;
