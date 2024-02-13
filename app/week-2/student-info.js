import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Kapilmeet Singh</p>
      <Link className="hover:text-green-400 hover:underline" href="https://github.com/ksingh62/cprg306-assignments">
        Github repo
      </Link>
    </div>
  );
}
