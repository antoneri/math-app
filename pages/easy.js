import { Button, ButtonGroup } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import times from "lodash/times";
import Link from "next/link";
import { useState } from "react";
import Seesaw from "./components/Seesaw";


export default function Easy() {
  const [flip, setFlip] = useState(false);
  const [correct, setCorrect] = useState(null);

  const numItemsLeft = 5;
  const numItemsRight = 6;

  const checkAnswer = (answer) => {
    const less = numItemsLeft < numItemsRight;
    const equal = numItemsLeft === numItemsRight;
    const greater = numItemsLeft > numItemsRight;

    const correct =
      less && answer === "less" ||
      equal && answer === "equal" ||
      greater && answer === "greater";

    setCorrect(correct);
    setFlip(less ? "right" : greater ? "left" : false);
  };

  return (
    <>
      <h1>Lätt svårighetsgrad</h1>

      <ButtonGroup variant="contained" color="primary">
        <Button onClick={() => checkAnswer("less")}>&lt;</Button>
        <Button onClick={() => checkAnswer("equal")}>=</Button>
        <Button onClick={() => checkAnswer("greater")}>&gt;</Button>
      </ButtonGroup>

      <br/>

      <Seesaw flip={flip}>
        <Seesaw.Left>
          {times(numItemsLeft)
            .map((i) => <div key={i}>🍎</div>)}
        </Seesaw.Left>
        <Seesaw.Right>
          {times(numItemsRight)
            .map((i) => <div key={i}>🍏</div>)}
        </Seesaw.Right>
      </Seesaw>

      <br/>

      {correct != null &&
      <Alert severity={correct ? "success" : "info"}>
        {correct ? "Rätt svar!" : "Tyvärr, fel svar."}
      </Alert>
      }

      <br/>

      <ButtonGroup variant="contained">
        <Button onClick={() => setFlip("left")}>Väster</Button>
        <Button onClick={() => setFlip(false)}>Mitten</Button>
        <Button onClick={() => setFlip("right")}>Höger</Button>
      </ButtonGroup>


      <div>
        <Link href="/">
          <Button>Tillbaka</Button>
        </Link>

        <Button onClick={() => {
          setCorrect(null);
          setFlip(false);
        }}>
          Nollställ
        </Button>
      </div>
    </>
  );
}