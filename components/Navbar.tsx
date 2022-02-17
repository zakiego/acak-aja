import Link from "next/link";
import { SiGithub } from "react-icons/si";

export default function Navbar() {
  return (
    <div className="w-full border-b-2 border-gray-300 pb-2">
      <div className="flex items-center justify-between ">
        <Link href="/" passHref>
          <div className="cursor-pointer text-2xl font-semibold opacity-80">
            Acak Aja
          </div>
        </Link>

        <a href="https://github.com/zakiego/acak-aja">
          <SiGithub className="h-7 w-7 opacity-75 transition-all duration-300 ease-in-out hover:scale-110" />
        </a>
      </div>
    </div>
  );
}
