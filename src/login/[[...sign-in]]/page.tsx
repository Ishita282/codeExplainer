import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <div className="w-full max-w-md p-6">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Create your account
        </h1>

        <SignUp
          appearance={{
            elements: {
              card: "shadow-xl border rounded-2xl",
            },
          }}
        />

      </div>
    </div>
  );
}