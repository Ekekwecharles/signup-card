import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function SignupCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <LeftSide />
      <RightSide />
    </div>
  );
}
