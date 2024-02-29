import { useState } from "react";
import UserForm from "./components/Form";
import CardBackView from "./components/VisaCard/Back";
import CardFrontView from "./components/VisaCard/Front";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardMM, setCardMM] = useState("");
  const [cardYY, setCardYY] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [cardView, setCardView] = useState("Front");

  return (
      <div className="h-screen flex flex-col justify-center items-center">
        {cardView === "Front" && <CardFrontView userName={cardHolder} cardNumber={cardNumber} cardMM={cardMM} cardYY={cardYY} />}
        {cardView === "Back" && <CardBackView cardCVV={cardCVV} />}
        <UserForm 
          cardNumberHandler={setCardNumber}
          cardHolderHandler={setCardHolder}
          cardMMHandler={setCardMM}
          cardYYHandler={setCardYY}
          cardCVVHandler={setCardCVV}
          cardViewHandler={setCardView}
        />
      </div>
  );
}

export default App;
