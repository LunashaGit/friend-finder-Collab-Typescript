import Spot from "../components/Spot";

const Spots = () => {
  return (
    <div className="pt-24 h-screen">
      <Spot list={false} create={true} />
    </div>
  );
};

export default Spots;