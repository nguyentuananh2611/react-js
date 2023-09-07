import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSpeciesDataAction } from "../store/auth";
import InputKing from "./Input-king";
import { useNavigate } from "react-router-dom";
function FormAU(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({ toa_dos: [] });
  const hanhdleChangeInput = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };
  const handleAddNew = async (e) => {
    e.preventDefault();
    console.log(postData);
    await dispatch(addSpeciesDataAction(postData));
    await navigate("/species");
  };
  return (
    <>
      <form className="au-form">
        <div>
          <h3>I. Thông tin chung về loài</h3>
          <div className="a row">
            <div className="a col col-9">
              <div className="a row">
                <div className="a col col-12 pa-3">
                  <div className="tieu-de">
                    Tên <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="div-form-input" style={{ padding: "0 12px" }}>
                    <input
                      placeholder="Tên"
                      name="ten"
                      onChange={hanhdleChangeInput}
                      required
                    />
                  </div>
                </div>
                <div className="a col col-6 pa-3">
                  <div className="tieu-de">
                    Tên khoa học <span style={{ color: "red" }}>*</span>
                  </div>
                  <div className="div-form-input" style={{ padding: "0 12px" }}>
                    <input
                      placeholder="Tên khoa học"
                      name="ten_khoa_hoc"
                      onChange={hanhdleChangeInput}
                      required
                    />
                  </div>
                </div>
                <div className="a col col-6 pa-3">
                  <div className="tieu-de">Tên tác giả</div>
                  <div className="div-form-input" style={{ padding: "0 12px" }}>
                    <input
                      placeholder="Tên tác giả"
                      name="ten_tac_gia"
                      onChange={hanhdleChangeInput}
                    />
                  </div>
                </div>
                <div className="a col col-12 pa-3">
                  <div className="tieu-de">Tên địa phương</div>
                  <div className="div-form-input" style={{ padding: "0 12px" }}>
                    <input
                      placeholder="Tên địa phương"
                      name="ten_dia_phuong"
                      onChange={hanhdleChangeInput}
                    />
                  </div>
                </div>
                <div className="a col col-12 pa-3">
                  <div className="tieu-de">Nguồn dữ liệu</div>
                  <div className="div-form-input" style={{ padding: "0 12px" }}>
                    <input
                      placeholder="Nguồn dữ liệu"
                      name="nguon_du_lieu"
                      onChange={hanhdleChangeInput}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="a col col-3 pl-3 pr-3">
              <div className="pl-6 pb-3" style={{ lineHeight: "100%" }}>
                <div className="tieu-de pt-3"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="a mt-4">
          <div className="a d-flex" style={{ alignItems: "center" }}>
            <h3 className="mr-3">II. Phân loại học</h3>
            <div className="add-new">
              <button>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="row">
            <InputKing
              place={"Giới"}
              isRanks={`Kingdom`}
              nameId={`kingdom_id`}
              postData={postData}
              setPostData={setPostData}
            />

            <InputKing
              place={`Ngành`}
              isRanks={`Phylum`}
              nameId={`phylum_id`}
              postData={postData}
              setPostData={setPostData}
            />

            <InputKing
              place={"Lớp"}
              isRanks={`Class`}
              nameId={`class_id`}
              postData={postData}
              setPostData={setPostData}
            />

            <InputKing
              place={"Bộ"}
              isRanks={`Order`}
              nameId={`order_id`}
              postData={postData}
              setPostData={setPostData}
            />

            <InputKing
              place={"Họ"}
              isRanks={`Family`}
              nameId={`family_id`}
              postData={postData}
              setPostData={setPostData}
            />

            <InputKing
              place={"Chi"}
              isRanks={`Genus`}
              nameId={`genus_id`}
              postData={postData}
              setPostData={setPostData}
            />
          </div>
        </div>
        <div className="a mt-4">
          <h3>III. Tình trạng bảo tồn</h3>
          <div className="row">
            <div className="a col col-6 pa-3">
              <div>
                <div>
                  <h3 className="pl-3">Sách đỏ</h3>
                </div>
                <div
                  style={{
                    lineHeight: "1.5",
                    backgroundColor: "#fff",
                    color: "rgba(0,0,0,.87)",
                  }}
                >
                  <table className="iii-table">
                    <thead>
                      <tr>
                        <th>Năm</th>
                        <th>Hiện trạng</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div
                            style={{
                              padding: "4px 8px",
                              height: "40px",
                              alignItems: "center",
                              border: "1px solid #ccc",
                            }}
                            className="a d-flex"
                          >
                            <div
                              style={{
                                width: "80%",
                                fontWeight: "bold",
                                opacity: "0.9",
                              }}
                            >
                              2023
                            </div>
                            <div
                              style={{ width: "20%", alignItems: "center" }}
                              className="a d-flex justify-content-center"
                            >
                              <i
                                style={{ opacity: "0.5" }}
                                className="fa-solid fa-caret-down"
                              ></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div
                            style={{
                              padding: "4px 8px",
                              height: "40px",
                              alignItems: "center",
                              border: "1px solid #ccc",
                            }}
                            className="a d-flex"
                          >
                            <div
                              style={{
                                width: "80%",
                                fontWeight: "bold",
                                opacity: "0.9",
                              }}
                            ></div>
                            <div
                              style={{ width: "20%", alignItems: "center" }}
                              className="a d-flex justify-content-center"
                            >
                              <i
                                style={{ opacity: "0.5" }}
                                className="fa-solid fa-caret-down"
                              ></i>
                            </div>
                          </div>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <i className="fa-solid fa-trash-can"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="div-plus">
                    <button>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="a col col-6 pa-3">
              <div>
                <div>
                  <h3 className="pl-3">IUCN</h3>
                </div>
                <div
                  style={{
                    lineHeight: "1.5",
                    backgroundColor: "#fff",
                    color: "rgba(0,0,0,.87)",
                  }}
                >
                  <table className="iii-table">
                    <thead>
                      <tr>
                        <th>Năm</th>
                        <th>Hiện trạng</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div
                            style={{
                              padding: "4px 8px",
                              height: "40px",
                              alignItems: "center",
                              border: "1px solid #ccc",
                            }}
                            className="a d-flex"
                          >
                            <div
                              style={{
                                width: "80%",
                                fontWeight: "bold",
                                opacity: "0.9",
                              }}
                            >
                              2023
                            </div>
                            <div
                              style={{ width: "20%", alignItems: "center" }}
                              className="a d-flex justify-content-center"
                            >
                              <i
                                style={{ opacity: "0.5" }}
                                className="fa-solid fa-caret-down"
                              ></i>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div
                            style={{
                              padding: "4px 8px",
                              height: "40px",
                              alignItems: "center",
                              border: "1px solid #ccc",
                            }}
                            className="a d-flex"
                          >
                            <div
                              style={{
                                width: "80%",
                                fontWeight: "bold",
                                opacity: "0.9",
                              }}
                            ></div>
                            <div
                              style={{ width: "20%", alignItems: "center" }}
                              className="a d-flex justify-content-center"
                            >
                              <i
                                style={{ opacity: "0.5" }}
                                className="fa-solid fa-caret-down"
                              ></i>
                            </div>
                          </div>
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <i className="fa-solid fa-trash-can"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="div-plus">
                    <button>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="a mt-4">
          <div className="row">
            <div className="a col col-12 pa-3">
              <div
                style={{ height: "40px", width: "100%" }}
                className="a d-flex justify-content-end"
              >
                <button
                  type="button"
                  className="button-add-new d-flex"
                  style={{ width: "160px" }}
                  onClick={handleAddNew}
                >
                  <span>
                    <i className="fa-solid fa-plus"></i>
                    <span>Thêm mới</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default FormAU;
