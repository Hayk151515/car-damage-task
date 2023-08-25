import { createEffect } from "effector";

const baseUrl: string = "https://myfailemtions.npkn.net/b944ff/";

export const fetchPositions = createEffect<void, string[], unknown>((params) =>
  fetch(baseUrl).then((req) => {
    return req.json().then((rawPositions: string[]) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const uniquePositions = new Set([...rawPositions, ...params]);
      return Array.from(uniquePositions);
    });
  })
);

export const updateActivePositions = createEffect<void, string[], unknown>(
  (params) =>
    fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((req) => req.json())
);
