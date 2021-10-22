import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="w-100 h-100vh d-flex align-items-center justify-content-center">
      <Spinner animation="border" />
    </div>
  );
};

export default Loader;
