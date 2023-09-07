import Header from "../../../component/Header";
import Sidebar from "../../../component/Sidebar";
import AddNewContent from "./add.new.content";
function AddNew() {
  return (
    <>
      <div className="fillHeight">
        <Header />
        <Sidebar />
        <AddNewContent />
      </div>
    </>
  );
}

export default AddNew;
