import { Button } from "@material-ui/core";
import Link from "next/link";

export default function Easy() {
  return (
    <>
      <h1>Svår svårighetsgrad</h1>

      <Link href="/">
        <Button>Tillbaka</Button>
      </Link>
    </>
  )
}