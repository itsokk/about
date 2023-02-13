// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? "border-indigo-500"
      : "border-transparent hover:border-indigo-500";
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="bg-zinc-900">
        <Suspense>
          <ErrorBoundary>
            <div class="flex justify-center">
              <ul class="container flex items-center p-3 text-gray-200 justify-center">
                <li class={`border-b-2 ${active("/")} mx-3 sm:mx-6 text-xl`}>
                  <A href="/" class="monospace">
                    Home
                  </A>
                </li>
                <li class={`border-b-2 ${active("/about")} mx-3 sm:mx-6 text-xl`}>
                  <A href="/about" class="monospace">
                    About
                  </A>
                </li>
                <li class={`border-b-2 ${active("/services")} mx-3 sm:mx-6 text-xl`}>
                  <A href="/services" class="monospace">
                    Services
                  </A>
                </li>
              </ul>
            </div>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
