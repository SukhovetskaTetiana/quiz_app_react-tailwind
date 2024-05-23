import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img
        src={logoImg}
        title="Quiz Logo"
        alt="Four squares with letters q, u, i, z"
      />
      <h1>ReactQuiz</h1>
    </header>
  );
}
