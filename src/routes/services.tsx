import { A } from "solid-start";
import Service from "~/components/Service";

export default function Services() {
  return (
    <main class="text-center mx-auto text-white p-4">
      <h1 class="text-4xl">Services</h1>
      <p class="text-xl my-4">
        I try to selfhost as much as I can. These are the services I selfhost.
        <br />
        Feel free to use them!
        <br />
        If there's any issue, or maybe you wanna suggest something for me to
        host, please contact me!
      </p>
      <a>Note: 100% uptime is not guaranteed.</a>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        <Service
          name="Piped"
          description="Alternative privacy-focused frontend for Youtube"
          url="https://piped.okk.pm"
        />
        <Service
          name="Libreddit"
          description="Alternative privacy-focused frontend for Reddit"
          url="https://reddit.okk.pm"
        />
        <Service
          name="Beatbump"
          description="Alternative privacy-focused frontend for Youtube Music"
          url="https://music.okk.pm"
        />
        <Service
          name="AnonymousOverflow"
          description="Alternative privacy-focused frontend for StackOverflow"
          url="https://code.okk.pm"
        />
        <Service
          name="Dumb"
          description="Alternative privacy-focused frontend for Genius"
          url="https://lyrics.okk.pm"
        />
        <Service
          name="Rimgo"
          description="Alternative privacy-focused frontend for Imgur"
          url="https://rimgo.okk.pm"
        />
        <Service
          name="Quetre"
          description="Alternative privacy-focused frontend for Quora"
          url="https://quetre.okk.pm"
        />
        <Service
          name="Hat.sh"
          description="Simple, fast, secure client-side file encryption."
          url="https://hat.okk.pm"
        />
        <Service
          name="Libremdb"
          description="Alternative privacy-focused frontend for IMDb"
          url="https://imdb.okk.pm"
        />
        <Service
          name="Cyberchef"
          description="The Cyber Swiss Army Knife - a web app for encryption, encoding, compression and data analysis."
          url="https://chef.okk.pm"
        />
      </div>
      <p class="mt-8">
        You can automatically redirect websites to these alternatives using{" "}
        <A class="font-bold" href="https://libredirect.github.io/">
          LibRedirect
        </A>
        .
      </p>
      <p class="my-8">
        <A href="/" class="text-indigo-500 hover:underline">
          Home
        </A>{" "}
        {" - "}
        <A href="/about" class="text-indigo-500 hover:underline">
          About
        </A>
        {" - "}
        <span>Services</span>
      </p>
    </main>
  );
}
