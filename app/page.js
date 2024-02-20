import Link from "next/link";

export default function Home() {
  const weeksDone = [2, 3, 4, 5, 6];

  return (
    <main className="flex flex-col items-center justify-between p-20 min-h-screen">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-6">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <div className="text-lg">
          <ul>
            {weeksDone.map((week) => (
              <li key={week} className="hover:text-green-400 hover:underline">
                <Link href={`/week-${week}`}>Week {week} Assignment</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
