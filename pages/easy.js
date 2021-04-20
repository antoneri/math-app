import { Button } from "@material-ui/core";
import Link from "next/link";
import Seesaw from "./components/Seesaw";

export default function Easy() {
  return (
    <>
      <h1>Lätt svårighetsgrad</h1>

      <Seesaw />

      <Link href="/">
        <Button>Tillbaka</Button>
      </Link>
    </>
  )
}