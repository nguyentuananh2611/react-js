import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import queryString from "query-string";
import { authSpecies, getSpeciesAction, deleteAction } from "../store/auth";
import Paginate from "./paginate";
function Table() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    paginate: true,
    page: 5,
    perpage: 7,
    search: "",
    inactive: -1,
  });
  const filterString = queryString.stringify(filters);
  const species = useSelector(authSpecies);
  useEffect(() => {
    async function fetchSpecies() {
      await dispatch(getSpeciesAction(filterString));
    }
    fetchSpecies();
  }, [dispatch, filterString]);

  const deleteData = async (e) => {
    e.preventDefault();

    const { id } = e.target;
    dispatch(deleteAction(id));
  };

  let content = null;
  let paginate = {};
  if (species) {
    const { list, pagination } = species;
    const { page, itemsPerPage, total } = pagination;
    const totalPage = Math.ceil(total / itemsPerPage);
    console.log(list);
    paginate.page = page;
    paginate.total = totalPage;
    content = list.map((items) => {
      return (
        <>
          <tr>
            <td>
              <div className="d-flex pt-2 pb-2">
                <img
                  src={
                    items.attachments[0] && items.attachments[0].path
                      ? `http://wlp.howizbiz.com/${items.attachments[0].path}`
                      : "https://tse1.mm.bing.net/th?id=OIP.ur177AOTmiLkZ5AONgDBjgAAAA&pid=Api&P=0&w=300&h=300"
                  }
                  alt=""
                />
                <div className="d-flex td-name">{items.ten}</div>
              </div>
            </td>
            <td>{items.ten_khoa_hoc}</td>
            <td>{items.kingdom.ten}</td>
            <td>{items.phylumn.ten}</td>
            <td>{items.class.ten}</td>
            <td>{items.order.ten}</td>
            <td>{items.family.ten_khoa_hoc}</td>
            <td>{items.genus.ten_khoa_hoc}</td>
            <td>
              <div className="hanh-dong">
                <button>
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button
                  type="button"
                  id={items.id}
                  name={items.ten}
                  onClick={deleteData}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        </>
      );
    });
  }

  return (
    <>
      <div className="d-flex flex-column flex-grow-1 overflow-hidden">
        <div className="fillHeight flex-grow-1 full-width full-height">
          <div className="fillHeight pb-2">
            <div className="full-wifth full+height overflow-hidden flex-grow-1">
              <div className="v-table">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <span>Tên</span>
                      </th>
                      <th>
                        <span>Tên khoa học</span>
                      </th>
                      <th>
                        <span>Giới</span>
                      </th>
                      <th>
                        <span>Nghành</span>
                      </th>
                      <th>
                        <span>Lớp</span>
                      </th>
                      <th>
                        <span>Bộ</span>
                      </th>
                      <th>
                        <span>Họ</span>
                      </th>
                      <th>
                        <span>Chi</span>
                      </th>
                      <th>
                        <span>
                          <span>Hành động</span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>{content}</tbody>
                </table>
              </div>
            </div>
            <div className="flex-grow-0 pt-2">
              <div
                className="d-flex justify-content-center"
                style={{ alignItems: "center" }}
              >
                {/* <div className="flex-grow-1 pagi-left">{pagileft}</div> */}
                <div
                  className="d-flex justify-content-center"
                  style={{ alignItems: "center" }}
                >
                  <Paginate
                    paginate={paginate}
                    filters={filters}
                    setFilters={setFilters}
                  />
                </div>
                {/* <div className="flex-grow-0 pagi-right">
                  <div className="v-select d-flex">
                    <div>
                      <input value={value} disabled />
                    </div>
                    <div>
                      <i className="fa-solid fa-caret-down"></i>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
    </>
  );
}

export default Table;
