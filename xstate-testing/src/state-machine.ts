import { createMachine } from "xstate";

const promiseMachine = createMachine({
  id: "promise",
  initial: "pending",
  states: {
    pending: {},
    resolved: {},
    rejected: {},
  },
});
