import Link from "next/link";
import "./Button.css";

type ButtonProps = {
  content: string;
  path: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ content, path }: ButtonProps) {
  return (
    <Link href={path}>
      <button className="rerom-button">
        <span className="fill" />
        <span className="label">{content}</span>

        <span className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 12h15.879m-6.129 6.75l5.69-5.69c.292-.292.439-.676.439-1.06M13.75 5.25l5.69 5.69c.292.292.439.676.439 1.06"></path>
          </svg>
        </span>
      </button>
    </Link>
  );
}
