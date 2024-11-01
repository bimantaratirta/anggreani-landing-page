import Flow from "../../../public/flow.png";
import Image from "next/image";

export default function Process() {
  return (
    <div className="max-w-[1440px] flex flex-col justify-center items-center gap-4 p-8 m-auto">
      <h1 className="text-4xl font-bold text-center">
        PROSES BISNIS CV ANGGREANI
      </h1>
      <h1 className="text-xl text-center max-w-xl mb-16">
        We have a production capacity of 80,000 - 100,000 yards per month with
        the workflow as below.
      </h1>
      <Image src={Flow} alt={"flow"} />
    </div>
  );
}
