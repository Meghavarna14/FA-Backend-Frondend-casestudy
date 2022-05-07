import React from "react";
import "./Resume.css";
import { useHistory } from "react-router-dom";

function Projects(props) {
  const [values, setValues] = props.sample;
  let history = useHistory();
  let change = (props) => {
    const { name, value } = props.target;
    setValues({ ...values, [name]: value });
  };

  const nextPage = () => {
    history.push("/Experience");
  };
  const prevPage = () => {
    history.push("/Education");
  };
  return (
    <div align="center">
      <h2>POJECTS DEVELOPED</h2>
      <h3>PROJECT 1</h3>
      <form align="center">
        <table align="center">
          <tbody>
            <tr>
              <td>
                <label>
                  <input
                    onChange={change}
                    name="title1"
                    className="title"
                    type="text"
                    class="form-control"
                    placeholder="Title*"
                    value={values.title1}
                  />
                </label>
                <br />
                <br />
                <label>
                  <input
                    onChange={change}
                    name="link1"
                    className="link"
                    type="text"
                    class="form-control"
                    placeholder="Link*"
                    value={values.link1}
                  />
                </label>

                <br />
                <br />
                <label>
                  <input
                    onChange={change}
                    name="desc3"
                    className="description"
                    type="text"
                    class="form-control"
                    placeholder="Description*"
                    value={values.desc3}
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <h3 align="center">PROJECT 2</h3>
            <tr>
              <td>
                <label>
                  <input
                    onChange={change}
                    name="title2"
                    className="title"
                    type="text"
                    class="form-control"
                    placeholder="Title*"
                    value={values.title2}
                  />
                </label>
                <br />
                <br />
                <label>
                  <input
                    onChange={change}
                    name="link2"
                    className="link"
                    type="text"
                    class="form-control"
                    placeholder="Link*"
                    value={values.link2}
                  />
                </label>

                <br />
                <br />
                <label>
                  <input
                    onChange={change}
                    name="desc4"
                    className="description"
                    type="text"
                    class="form-control"
                    placeholder="Description*"
                    value={values.desc4}
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
              id="next3"
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

export default Projects;
