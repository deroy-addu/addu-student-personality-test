import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="grid place-items-center">
      <div />
      <div className="relative w-fit">
        <form>
          <hgroup>
            <h1 className="font-serif text-4xl font-semibold">
              Discover your learning style.
            </h1>
            <p className="mt-2 text-gray-500">
              Please enter your ADDU account details to continue.
            </p>
          </hgroup>
          <fieldset className="mt-8 flex flex-col gap-4">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="rounded-md border border-gray-200 bg-white px-4 py-2"
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="rounded-md border border-gray-200 bg-white px-4 py-2"
            />
          </fieldset>
          <div className="mt-8 space-y-4">
            <button className="w-full rounded-md bg-slate-900 px-4 py-2 text-white">
              Login
            </button>
            <button className="flex w-full items-center justify-center gap-4 rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-900">
              <FcGoogle className="text-2xl" />
              <span>Sign-in With Google</span>
            </button>
          </div>
        </form>
      </div>
      <div />
    </div>
  );
}
