import { A } from "solid-start";

export default function Home() {
  return (
    <main class="text-center mx-auto text-white p-4">
      <h1 class="max-6-xs text-8xl font-thin mt-12 mb-8">
        okk
        <img
          src="/img/poland.svg"
          alt="Poland"
          class="ml-4 inline-block w-12 h-12"
        />
      </h1>
      <p class="my-8">coder and tech enthusiast based in Poland.</p>
      <p class="my-16">
        <span>Home</span>
        {" - "}
        <A href="/about" class="text-indigo-500 hover:underline">
          About
        </A>
        {" - "}
        <A href="/services" class="text-indigo-500 hover:underline">
          Services
        </A>{" "}
      </p>
    </main>
  );
}
