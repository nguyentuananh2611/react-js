import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authDataSix, getDataSixAction } from "../store/auth";
function InputKing(props) {
  const { place, isRanks, nameId, postData, setPostData } = props;
  const dispatch = useDispatch();
  let abc = "";
  const [value, setValue] = useState("");
  const [on, setOn] = useState(false);
  const fetchDataForRank = async (selectedRank) => {
    await dispatch(getDataSixAction(selectedRank));
  };
  const handleBlock = (e) => {
    // e.preventDefault();
    setOn((on) => !on);
    const { name } = e.target;
    fetchDataForRank(name);
  };
  const local = JSON.parse(window.localStorage.getItem(isRanks));
  const handleChangeValue = (e) => {
    e.preventDefault();
    const { name, id } = e.target;
    setValue(name);
    setOn(false);
    const a = id.charAt(0);
    const intKytuDauTien = parseInt(a);
    setPostData({ ...postData, [nameId]: intKytuDauTien });
  };
  useEffect(() => {
    console.log(postData); 
  }, [postData]);
  let content = null;
  if (local) {
    content = local.map((items, index) => {
      return (
        <li key={index}>
          <a
            id={items.id}
            name={
              items.ten
                ? `${items.ten_khoa_hoc}-${items.ten}`
                : `${items.ten_khoa_hoc}`
            }
            onClick={handleChangeValue}
            href={abc}
          >
            {items.ten
              ? `${items.ten_khoa_hoc}-${items.ten}`
              : `${items.ten_khoa_hoc}`}
          </a>
        </li>
      );
    });
  }
  const handleClose = (e) => {
    e.preventDefault();
    setValue("");
    setOn(false);
  };
  return (
    <>
      <div className="a col col-4 pa-3 position-relative">
        <div className="tieu-de">
          <span>{place}</span> <span style={{ color: "red" }}>*</span>
        </div>
        <div
          className={`div-form-input d-flex justify-content-between ${
            on ? "border-red" : ""
          }`}
          style={{ padding: "0 12px" }}
        >
          <input
            placeholder={place}
            value={value}
            name={isRanks}
            required
            style={{ width: "80%" }}
            onClick={handleBlock}
          />
          <a
            href={abc}
            onClick={handleClose}
            className={`close ${value !== "" ? "active" : ""}`}
          >
            <i className="fa-solid fa-xmark"></i>
          </a>
          <div
            className="d-flex justify-content-center"
            style={{ alignItems: "center", width: "10%" }}
          >
            <i
              style={{ opacity: "0.5" }}
              className={`fa-solid fa-caret-down ${on ? "rote-180" : ""}`}
            ></i>
          </div>
        </div>
        <div
          className={`a position-absolute add-new-menuchild ${
            on ? "active" : ""
          }`}
        >
          <ul>{content}</ul>
        </div>
      </div>
    </>
  );
}

export default InputKing;
