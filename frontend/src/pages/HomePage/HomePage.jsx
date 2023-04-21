import InputUserName from "../../components/InputUsername/InputUsername";
import FetchButtons from "../../components/FetchButtons/FetchButtons";
import StartButton from "../../components/StartButton/StartButton";
// import Transition from "@components/animation/animation";

function HomePage() {
  return (
    <>
      <h1>Mashup Memo</h1>
      <InputUserName />
      <FetchButtons />
      <StartButton />
      {/* <Transition /> */}
    </>
  );
}

export default HomePage;
