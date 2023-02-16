import { A } from "solid-start";

export default function About() {
  return (
    <main class="text-center mx-auto text-white p-4">
      <h1 class="text-4xl">About</h1>
      <p class="text-xl my-8">
        I like working with React and React-based frameworks.
        <br />
        Currently I'm learning Golang and getting deeper into Linux and system
        administration.
        <br />
        I also know some Kotlin and Java.
        <br />
        <br />
        I'm open to work on any <b>open-source</b> project. Feel free to contact
        me on any of the platforms below.
      </p>
      <ul class="flex justify-center flex-col">
        <li class="mx-4 text-3xl">
          <A
            href="https://discordlookup.com/user/229275839571689475"
            target="_blank"
          >
            Discord <img src="/img/discord.svg" class="inline w-9 h-9" />
          </A>
        </li>
        <br />
        <li class="mx-4 text-3xl">
          <A href="https://github.com/itsokk" target="_blank">
            GitHub <img src="/img/github.svg" class="inline w-9 h-9" />
          </A>
        </li>
      </ul>
      <p class="my-16">
      <A href="/" class="text-indigo-500 hover:underline">
          Home
        </A>{" "}
        {" - "}
        <span>
          About
        </span>{" - "}<A href="/services" class="text-indigo-500 hover:underline">
          Services
        </A>{" "}
      </p>
    </main>
  );
}
