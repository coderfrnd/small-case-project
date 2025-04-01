import { MoonLoader } from "react-spinners";
const override = {
  display: "block",
  margin: "100px",
};
const Spinner = ({ loading }) => {
  return (
    <MoonLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={200}
    />
  );
};

export default Spinner;
