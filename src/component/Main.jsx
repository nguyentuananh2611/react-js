import Search from "./Search";
import Table from "./Table";
function Main() {
  return (
    <>
      <main className="main">
        <div className="fillHeight content">
          <div className="fillHeight d-flex flex-column">
            <div className="flex-grow-0 p-bottom-20">
              <div className="d-block d-flex full-width full-height align-content-center">
                <div className="row align-content-center">
                  <div className="d-flex align-content-center">
                    <div className="avartar d-flex justify-content-center">
                      <i className="fa-solid fa-spider"></i>
                    </div>
                    <div className="tittle-page d-flex">loài nguy cấp quý hiếm</div>
                  </div>
                </div>
              </div>
            </div>
            <Search />
            <Table />
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
