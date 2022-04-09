import type { NextPage } from "next";
import SayHello from "jaymin-design-system";

const Home: NextPage = () => {
  const someConstant = 10;

  return (
    <div>
      <SayHello name="lee woohyuk" />
    </div>
  );
};

export default Home;
