import { A } from "solid-start";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-white p-4">
      <h1 class="max-6-xs text-6xl text-white font-thin my-4">Not Found</h1>
      <img src="/img/404.jpg" width={400} height={400} class="m-auto my-2" />
      <p class="my-8">
        <A href="/" class="text-indigo-500 hover:underline">
          Home
        </A>
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
