import React from "react";
import "./Resume.css";
import { useHistory } from "react-router-dom";

function Extra(props) {
  const [values, setValues] = props.sample;
  let history = useHistory();
  let change = (props) => {
    const { name, value } = props.target;
    setValues({ ...values, [name]: value });
  };

  const nextPage = () => {
    history.push("/Show");
  };
  const prevPage = () => {
    history.push("/Experience");
  };
  return (
    <div align="center">
      <form align="center">
        <table align="center">
          <h2>EXTRA DETAILS</h2>
          <tr>
            <td>
              <h3>SKILLS/LANGUAGES</h3>
              <label>
                <input
                  onChange={change}
                  name="skill1"
                  type="text"
                  class="form-control"
                  placeholder="Skill 1"
                  value={values.skill1}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input
                  onChange={change}
                  name="skill2"
                  type="text"
                  class="form-control"
                  placeholder="Skill 2"
                  value={values.skill2}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input
                  onChange={change}
                  name="skill3"
                  type="text"
                  class="form-control"
                  placeholder="Skill 3"
                  value={values.skill3}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </td>
          </tr>
          <br />
          <br />
          <tr>
            <td>
              <label>
                <input
                  onChange={change}
                  name="skill4"
                  type="text"
                  class="form-control"
                  placeholder="Skill 4"
                  value={values.skill4}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input
                  onChange={change}
                  name="skill5"
                  type="text"
                  class="form-control"
                  placeholder="Skill 5"
                  value={values.skill5}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input
                  onChange={change}
                  name="skill6"
                  type="text"
                  class="form-control"
                  placeholder="Skill 6"
                  value={values.skill6}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </td>
          </tr>
          <br />
          <br />
          <tr>
            <td>
              <h3>INTEREST</h3>
              <label>
                <input
                  onChange={change}
                  name="interest1"
                  type="text"
                  class="form-control"
                  placeholder="Interest 1"
                  value={values.interest1}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input
                  onChange={change}
                  name="interest2"
                  type="text"
                  class="form-control"
                  placeholder="Interest 2"
                  value={values.interest2}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input
                  onChange={change}
                  name="interest3"
                  type="text"
                  class="form-control"
                  placeholder="Interest 3"
                  value={values.interest3}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </td>
          </tr>
          <br />
          <br />
          <tr>
            <td>
              <label>
                <input
                  onChange={change}
                  name="interest4"
                  type="text"
                  class="form-control"
                  placeholder="Interest 4"
                  value={values.interest4}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input
                  onChange={change}
                  name="interest5"
                  type="text"
                  class="form-control"
                  placeholder="Interest 5"
                  value={values.interest5}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label>
                <input
                  onChange={change}
                  name="interest6"
                  type="text"
                  class="form-control"
                  placeholder="Interest 6"
                  value={values.interest6}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            </td>
          </tr>
          <br /> <br />
          <button
            className="back"
            type="submit"
            class="btn btn-dark"
            onClick={prevPage}
          >
            BACK
          </button>
          <button
            id="next5"
            type="submit"
            class="btn btn-primary"
            onClick={nextPage}
          >
            DOWNLOAD
          </button>
        </table>
      </form>
    </div>
  );
}

export default Extra;
