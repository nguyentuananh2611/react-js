import { useNavigate } from "react-router-dom";
function Search() {
  const navigate = useNavigate();
  const handleAddNewPage = (e) => {
    e.preventDefault();
    return navigate("/species/add-new");
  };
  return (
    <>
      <div className="flex-grow-0 p-bottom-16">
        <div className="d-flex">
          <div className="flex-grow-1 d-flex">
            <div className="flex-grow-1" style={{ maxWidth: "800px" }}>
              <div className="v-input">
                <div className="v-input_control d-flex">
                  <div className="v-input_icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className="v-input_input">
                    <input placeholder="Tìm kiếm theo tên" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-grow-0">
            <div className="p-left-8" style={{ width: "160px" }}>
              <button
                type="button"
                className="button-add-new d-flex"
                onClick={handleAddNewPage}
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
    </>
  );
}

export default Search;
