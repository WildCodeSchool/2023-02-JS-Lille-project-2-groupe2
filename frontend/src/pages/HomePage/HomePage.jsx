import { useState } from "react";
import FetchButtons from "../../components/FetchButtons/FetchButtons";
import InputUserName from "../../components/InputUsername/InputUsername";

import "./HomePage.scss";

function HomePage() {
  const [ready, setReady] = useState(false);

  const isReady = (value) => {
    setReady(value);
  };

  return (
    <>
      <h1 className="header_text">Mashup Memo</h1>

      <InputUserName isReady={isReady} />
      <FetchButtons isReady={ready} />
    </>
  );
}

export default HomePage;
