import { validateRequest } from "~/actions/auth";
import NavBar from "./NavBar";

export default async function Header() {
  const { session } = await validateRequest();
  return (
    <header className="h-20 w-full">
      <div className="container h-full">
        <NavBar session={session!} />
      </div>
    </header>
  );
}
