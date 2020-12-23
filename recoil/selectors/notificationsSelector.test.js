import { snapshot_UNSTABLE } from "recoil";
import notificationsSelector from "./notificationsSelector";

test("test notificationsSelector", () => {
  const state = snapshot_UNSTABLE()
    .getLoadable(notificationsSelector)
    .valueOrThrow();
  expect(state).toEqual([]);

  const testSnapshot1 = snapshot_UNSTABLE(({ set }) =>
    set(notificationsSelector, "N1")
  );
  const updatedState1 = testSnapshot1
    .getLoadable(notificationsSelector)
    .valueOrThrow();
  expect(updatedState1).toEqual(["N1"]);

  const testSnapshot2 = snapshot_UNSTABLE(({ set }) =>
    set(notificationsSelector, [])
  );
  const updatedState2 = testSnapshot2
    .getLoadable(notificationsSelector)
    .valueOrThrow();
  expect(updatedState2).toEqual([]);
});
