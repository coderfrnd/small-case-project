import { GridLoader, PuffLoader, ScaleLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "300px",
};
const Spinner = ({ loading }) => {
  return (
    <PuffLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={300}
    />
  );
};

export default Spinner;
