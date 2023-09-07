import PropTypes from "prop-types";
Paginate.propTypes = {
  paginate: PropTypes.object.isRequired,
  onChangePage: PropTypes.func,
};

Paginate.defaultProps = {
  onChangePage: null,
};

function Paginate(props) {
  const { paginate, filters, setFilters } = props;
  const { page, total } = paginate;
  let abc = "";
  let arr = [];
  for (let i = 1; i <= total; i++) {
    arr.push(i);
  }
  let beforePage = page - 1;
  let afterPage = page + 1;
  const handleChangePage = (e, newpage) => {
    e.preventDefault();
    setFilters({ ...filters, page: newpage });
  };

  const renderPaginate = arr.map((items) => {
    if (items === 1) {
      return (
        <li>
          <a
            href={abc}
            className={page === items ? "isactive" : ""}
            onClick={(e) => {
              handleChangePage(e, items);
            }}
          >
            {items}
          </a>
        </li>
      );
    }
    if (items >= beforePage && items <= afterPage) {
      return (
        <li>
          <a
            href={abc}
            className={items === page ? "isactive" : ""}
            onClick={(e) => {
              handleChangePage(e, items);
            }}
          >
            {items}
          </a>
        </li>
      );
    }
    if (items === total) {
      return (
        <li>
          <a
            href={abc}
            className={items === page ? "isactive" : ""}
            onClick={(e) => {
              handleChangePage(e, items);
            }}
          >
            {items}
          </a>
        </li>
      );
    }
  });

  return (
    <>
      <nav className="table-paging">
        <ul className="d-flex">
          <li>
            <a
              href={abc}
              disable={page <= 1}
              onClick={(e) => {
                handleChangePage(e, page - 1);
              }}
            >
              &#60;
            </a>
          </li>
          {renderPaginate}
          <li>
            <a
              href={abc}
              disable={page >= total}
              onClick={(e) => {
                handleChangePage(e, page + 1);
              }}
            >
              &#62;
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Paginate;
