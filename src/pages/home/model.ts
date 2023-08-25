import { createEvent, createStore, sample } from "effector";
import { positionsApi } from "../../api";

export const $positions = createStore<string[]>([]);

export const pageMounted = createEvent<string[]>();

export const togglePosition = createEvent<string>();

sample({
  clock: pageMounted,
  target: positionsApi.fetchPositions,
});

sample({
  clock: togglePosition,
  source: $positions,
  fn: (positions, label) => {
    if (positions.includes(label)) {
      return positions.filter((position) => position !== label);
    }
    return [...positions, label];
  },
  target: positionsApi.updateActivePositions,
});

$positions.on(
  positionsApi.updateActivePositions.doneData,
  (_, positions) => positions
);

$positions.on(
  positionsApi.fetchPositions.doneData,
  (_, positions) => positions
);
