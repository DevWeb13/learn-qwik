// src/routes/learn/dashboard-app/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { routeLoader$, routeAction$ } from "@builder.io/qwik-city";
import MobileMenu from "~/components/mobile-menu/mobile-menu";
import HeaderOfMain from "~/components/UI/headerOfMain/headerOfMain";
import type { ProgressCircle } from "~/types/types";

export const onGet: RequestHandler = async ({ cookie }) => {
  let progressCircleCookie = cookie
    .get("progressCircle")
    ?.json<ProgressCircle>();
  if (!progressCircleCookie) {
    progressCircleCookie = {
      completed: [],
    };
    cookie.set("progressCircle", progressCircleCookie, { path: "/" });
  }
};

export const useGetProgressCircleCookie = routeLoader$(({ cookie }) => {
  return cookie.get("progressCircle")?.json<ProgressCircle>();
});

export const useSetProgressCircleCookie = routeAction$(
  async (data, requestEvent) => {
    // console.log(requestEvent);
    const completedChapter = Number(data.goToChapter) - 1;
    const nextUri = data.nextUri;
    console.log({ completedChapter, nextUri });

    // let progressCircle = requestEvent.cookie
    //   .get("progressCircle")
    //   ?.json<ProgressCircle>();

    // console.log({ progressCircle });

    // if (!progressCircle) {
    //   progressCircle = {
    //     completed: [],
    //   };
    // }

    // if (
    //   !progressCircle.completed.includes(completedChapter) &&
    //   completedChapter !== 0
    // ) {
    //   progressCircle.completed.push(completedChapter);
    //   requestEvent.cookie.set("progressCircle", progressCircle, { path: "/" });
    // }

    // redirect to the next chapter
    requestEvent.redirect(302, `/learn/dashboard-app/${nextUri}`);
  },
);

export default component$(() => {
  return (
    <>
      <main>
        <div class="relative mx-auto max-w-screen-lg px-4 py-4 md:py-10">
          <MobileMenu />
          <HeaderOfMain />
          <Slot />
        </div>
      </main>
    </>
  );
});
