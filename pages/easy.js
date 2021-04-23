import { Button, ButtonGroup } from "@material-ui/core";
import Link from "next/link";
import { useState } from "react";
import Seesaw from "./components/Seesaw";


export default function Easy() {
  const [flip, setFlip] = useState(false);

  const random = Math.round(Math.random() * 100);

  const text = random < 50 ? "mindre än 50 " : "större än 50"

  return (
    <>
      <h1>Lätt svårighetsgrad</h1>

      <ButtonGroup variant="contained" color="primary">
        <Button onClick={() => alert("Mindre än")}>&lt;</Button>
        <Button onClick={() => alert("Lika med")}>=</Button>
      </ButtonGroup>

      <Seesaw flip={flip} color="red">
      </Seesaw>

      <ButtonGroup variant="contained" color="primary">
        <Button onClick={() => setFlip("left")}>Väster</Button>
        <Button onClick={() => setFlip(false)}>Mitten</Button>
        <Button onClick={() => setFlip("right")}>Höger</Button>
      </ButtonGroup>


      <div>
        <Link href="/">
          <Button>Tillbaka</Button>
        </Link>
      </div>
    </>
  );
}