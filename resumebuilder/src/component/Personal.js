import React from "react";
import { useHistory } from "react-router-dom";
import "./Resume.css";

function Personal(props) {
  let [values, setValues] = props.sample;
  let history = useHistory();
  let change = (props) => {
    const { name, value } = props.target;
    setValues({ ...values, [name]: value });
  };

  const nextPage = () => {
    history.push("/Education");
  };
  return (
    <div align="center">
      <h2>PERSONAL DETAILS</h2>
      <form align="center">
        <table align="center">
          <tbody>
            <tr>
              <td>
                <label>
                  <input
                    onChange={change}
                    type="text"
                    class="form-control"
                    placeholder="FirstName"
                    name="fname"
                    value={values.fname}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="lname"
                    type="text"
                    class="form-control"
                    placeholder="LastName"
                    value={values.lname}
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
                    name="email"
                    className="email"
                    type="email"
                    class="form-control"
                    placeholder="Email Id"
                    value={values.email}
                  />
                </label>
                &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="phnumber"
                    type="text"
                    class="form-control"
                    placeholder="Phone Number"
                    value={values.phnumber}
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
                    name="website"
                    type="text"
                    class="form-control"
                    placeholder="Your Website"
                    value={values.website}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="github"
                    type="text"
                    class="form-control"
                    placeholder="GitHub"
                    value={values.github}
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
                    name="linkedin"
                    type="text"
                    class="form-control"
                    placeholder="LinkedIn"
                    value={values.linkedin}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="twitter"
                    type="text"
                    class="form-control"
                    placeholder="Twitter"
                    value={values.twitter}
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
                    name="facebook"
                    type="text"
                    class="form-control"
                    placeholder="FaceBook"
                    value={values.facebook}
                  />
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <label>
                  <input
                    onChange={change}
                    name="instagram"
                    type="text"
                    class="form-control"
                    placeholder="Instagram"
                    value={values.instagram}
                  />
                </label>
              </td>
            </tr>
            <br />
            <br />
            <button className="btn btn-dark" disabled type="submit">
              BACK
            </button>
            <button
              id="next"
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
export default Personal;
