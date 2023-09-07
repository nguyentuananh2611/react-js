import { useState } from "react";
import { useSelector } from "react-redux";
import { authUser } from "../store/auth";
import Logout from "./Logout";
function Header() {
  const user = useSelector(authUser);
  const [on, setOn] = useState(false);
  const { name, role } = user;
  const kyTuDauTien = name.charAt(0);
  let abc = "";
  const handleToggle = (e) => {
    setOn((on) => !on);
  };
  return (
    <>
      <header className="header d-flex justify-content-between align-content-center">
        <div className="headerLeft v-height d-flex">
          <div className="buttonBar">
            <button>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
          <div className="Logo">
            <a href={abc}>
              <img
                src="http://wlp.howizbiz.com/static/img/logoColor.e5de23ce.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="headerTittle d-flex">
            HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN
            BẢO VỆ
          </div>
        </div>
        <div className="headerRight v-height">
          <button
            type="button"
            className={`buttonHeaderUser`}
            onClick={handleToggle}
          >
            <span className="v-btn_content">
              <div className="avartar__text__32">{kyTuDauTien}</div>
              <div className="user__name">{name}</div>
            </span>
            <div className={`logout ${on ? "active" : ""}`}>
              <Logout name={name} kyTuDauTien={kyTuDauTien} role={role} />
            </div>
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
