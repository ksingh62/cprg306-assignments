"use client";

import Link from "next/link";
import Image from "next/image";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
      {user ? (
        <p className="text-lg">
          Signed In as {user.displayName} ({user.email}).
        </p>
      ) : (
        ""
      )}

      {user ? (
        <div className="text-lg">
          <button className="hover:underline" onClick={firebaseSignOut}>
            Sign out
          </button>
        </div>
      ) : (
        <div className="text-lg">
          <button
            onClick={gitHubSignIn}
            className="hover:underline ml-4 flex flex-direction items-center justify-center gap-5 border p-2 rounded-md"
          >
            <Image
              src="/github-mark-white.png"
              alt="GitHub logo"
              width={25}
              height={25}
            />{" "}
            Sign in with GitHub
          </button>
        </div>
      )}

      {user !== null && (
        <Link className="text-lg hover:underline" href={`week-10/shopping-list`}>
          Continue to your Shopping List
        </Link>
      )}
    </div>
  );
}
