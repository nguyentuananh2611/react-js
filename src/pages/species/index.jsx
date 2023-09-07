import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import Main from "../../component/Main";
function SpeciePage() {
  return (
    <>
      <div className="fillHeight position-relative">
        <Header />
        <Sidebar />
        <Main />
        {/* <div
          style={{
            height: "33px",
            backgroundColor: "#F7F7F6",
            zIndex: "5",
            position: "fixed",
            bottom: "0",
            right: "0",
            left: "0",
          }}
        ></div> */}
      </div>
    </>
  );
}

export default SpeciePage;
