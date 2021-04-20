import { Button } from "@material-ui/core";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>Välj svårighetsgrad</h1>

      <Link href="/easy">
        <Button variant="contained" color="primary">Lätt</Button>
      </Link>

      <br/>

      <Link href="/hard">
        <Button variant="contained" color="secondary">Svår</Button>
      </Link>
    </>
  );
}
