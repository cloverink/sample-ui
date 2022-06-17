import { HelloType } from "./Hello.types";
import "./Hello.scss"

const Hello: React.FC<HelloType> = ({ name }) => (
  <div className="text-3xl font-bold underline hello">
      Hello, {name}
  </div>
);

export default Hello;
