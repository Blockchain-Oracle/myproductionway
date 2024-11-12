import ModeToggle from "./ToggleMenu";

export default function Footer() {
  return (
    <footer className="container flex h-full w-full flex-row justify-around border-t-4 p-5">
      <div>
        <h1 className="">
          Dcveloped by{" "}
          <span className="underline underline-offset-2 hover:cursor-pointer">
            AJ
          </span>
        </h1>
      </div>
      <ModeToggle />
    </footer>
  );
}
