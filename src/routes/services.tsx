import { A } from "solid-start";
import Service from "~/components/Service";

export default function Services() {
  return (
    <main class="text-center mx-auto text-white p-4">
      <h1 class="text-4xl">Services</h1>
      <p class="text-xl my-4">
        I try to selfhost as much as i can. These are the services i selfhost.
        <br />
        Feel free to use them!
        <br />
        If there's any issue, or maybe you wanna suggest something for me to host, please contact me!
      </p>
      <a>Note: 100% uptime is not guaranteed.</a>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        <Service name="Piped" description="Alternative privacy-focused frontend for Youtube" url="https://piped.itsokk.me" />
        <Service name="Libreddit" description="Alternative privacy-focused frontend for Reddit" url="https://reddit.itsokk.me" />
        <Service name="Beatbump" description="Alternative privacy-focused frontend for Youtube Music" url="https://music.itsokk.me" />
        <Service name="AnonymousOverflow" description="Alternative privacy-focused frontend for StackOverflow" url="https://code.itsokk.me" />
        <Service name="Dumb" description="Alternative privacy-focused frontend for Genius" url="https://lyrics.itsokk.me" />
      </div>
      <p class="mt-8">You can automatically redirect websites to these alternatives using <A class="font-bold" href="https://libredirect.github.io/">LibRedirect</A>.</p>
      <p class="my-8">
      <A href="/" class="text-indigo-500 hover:underline">
          Home
        </A>{" "}
        {" - "}
        <A href="/about" class="text-indigo-500 hover:underline">
          About
        </A>{" - "}
        <span>Services</span>
      </p>
    </main>
  );
}
