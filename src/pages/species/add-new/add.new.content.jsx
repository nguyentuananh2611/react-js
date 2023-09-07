import FormAU from "../../../component/Form-add-update";
function AddNewContent() {
  return (
    <>
      <div className="main">
        <div className="main-add-new-wrap fillHeight">
          <div className="add-new-tittle d-flex">
            <div className="margin-right-16">
              <button className="d-inline-flex full-width">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
            </div>
            <div className="d-flex align-content-center">
                <h2>THÔNG TIN VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM CẦN ĐƯỢC ƯU TIÊN BẢO VỆ</h2>
            </div>
          </div>
          <FormAU />
        </div>
      </div>
    </>
  );
}

export default AddNewContent;
