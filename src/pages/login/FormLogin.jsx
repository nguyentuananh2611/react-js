import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authErrorMessage, authLoading, loginAction } from "../../store/auth";

function FormLogin() {
  const loading = useSelector(authLoading);
  const errorMessage = useSelector(authErrorMessage);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onchangeform = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const validate = (data) => {
    let errors = {};
    if (!data.username) {
      errors.exist = true;
      errors.username = "Username is required";
    }
    if (!data.password) {
      errors.exist = true;
      errors.password = "Password is required";
    }
    setErrors(errors);
    return !errors.exist;
  };

  if (errorMessage && errorMessage !== "") {
    alert(errorMessage);
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    let is_validate = validate(data);
    if (is_validate) {
      await dispatch(loginAction(data));
      return navigate("/species");
    }
  };
  return (
    <>
      <form className="formLogin" onSubmit={onsubmit}>
        {errors.exist && <div className="alert">Authentication failed</div>}
        <div className="divForm">
          <div className="d-flex align-content-center justify-content-center">
            <div className="bgImage-form"></div>
          </div>
          <div className="text-h5">Đăng nhập</div>
          <div className="formInput">
            <div className="divInput">
              <input
                type="text"
                onChange={onchangeform}
                name="username"
                disabled={loading}
                placeholder="Enter username"
              />
              {errors.username !== "" && (
                <div className="error">{errors.username}</div>
              )}
            </div>
            <br />
            <div className="divInput">
              <input
                type="password"
                onChange={onchangeform}
                name="password"
                disabled={loading}
                placeholder="Enter password"
              />
              {errors.password !== "" && (
                <div className="error">{errors.password}</div>
              )}
            </div>
          </div>
          <br />
          <div className="formButton" disabled={loading}>
            <button type="submit">Đăng nhập</button>
            {/* {errorMessage && <div className="error">{errorMessage}</div>} */}
          </div>
        </div>
      </form>
    </>
  );
}

export default FormLogin;
