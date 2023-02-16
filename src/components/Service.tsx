import { A } from "solid-start";

export default function Service({ name, description, url }: { name: string, description: string, url: string }) {
    return <A href={ url }>
        <div class="bg-indigo-800 rounded-lg p-4 hover:bg-indigo-700">
          <h2 class="text-2xl">{ name }</h2>
          <p class="text-xl mt-4">{ description }</p>
        </div>
    </A>
}