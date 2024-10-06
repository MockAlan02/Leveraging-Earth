import Link from "next/link";
import { Button } from "./ui/button";

export default function Menu({ bgColor, txtColor }: any): any {
  return (
    <nav
      className={`flex items-center justify-between p-4 ${
        bgColor ? bgColor : "bg-gray-900"
      } text-${txtColor ? txtColor : "white"} `}
    >
      <div className="flex items-center">
        <h1>NASA</h1>
      </div>
      <ul className={`flex space-x-8 `}>
        <li>
          <Link href="/" passHref>
            <Button
              variant="link"
              className={`text-${txtColor ? txtColor : "white"}`}
            >
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <Button
              variant="link"
              className={`text-${txtColor ? txtColor : "white"}`}
            >
              About
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/social" passHref>
            <Button
              variant="link"
              className={`text-${txtColor ? txtColor : "white"}`}
            >
              Social
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/blog" passHref>
            <Button
              variant="link"
              className={`text-${txtColor ? txtColor : "white"}`}
            >
              Blog
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/forum" passHref>
            <Button
              variant="link"
              className={`text-${txtColor ? txtColor : "white"}`}
            >
              Forum
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
