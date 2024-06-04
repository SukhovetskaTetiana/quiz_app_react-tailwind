import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  const headerClasses =
    "my-[2rem] mx-0 text-center flex flex-col items-center gap-2";

  const h1Classes =
    "font-bold text-[2.5rem] tracking-[0.6rem] m-0 uppercase bg-gradient-to-r from-pink from-[40%] via-blau-200 via-[60%] webkit-background-clip webkit-text-fill-color";

  return (
    <header className={headerClasses}>
      <img
        className="w-[3rem] h-[3rem] drop-shadow-xl"
        src={logoImg}
        title="Quiz Logo"
        alt="Four squares with letters q, u, i, z"
      />
      <h1 className={h1Classes}>ReactQuiz</h1>
    </header>
  );
}
