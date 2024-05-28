import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="my-[2rem] mx-0 text-center flex flex-col items-center gap-2">
      <img
        className="w-[3rem] h-[3rem] drop-shadow-xl"
        src={logoImg}
        title="Quiz Logo"
        alt="Four squares with letters q, u, i, z"
      />
      <h1 className="text-blau-100 font-bold text-[2.5rem] tracking-[0.6rem] m-0 uppercase">
        ReactQuiz
      </h1>
    </header>
  );
}
