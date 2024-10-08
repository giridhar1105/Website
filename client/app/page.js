import Image from "next/image";
import Pg1 from "./Pg1/page";
import Pg2 from "./Pg2/page";

export default function Home() {
  return (
    <div>
      <Pg1 />
      <Pg2 />
    </div>
  )
}