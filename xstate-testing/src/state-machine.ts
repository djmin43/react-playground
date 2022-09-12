import { createMachine } from "xstate";

// export const machine = 
// /** @xstate-layout N4IgpgJg5mDOIC5QQPZSgTwHQEFYBswwAHAYgBkUBXCAAgDsUBLWMRUYlWJgFyZXrsQAD0QAGADQgM4gL6ypqdNjyESpAMoBbMPny0AZihQQhnbnwFDRCSdLkKQSzLgDuAQwDWYUgDF3erC07gRExGZcvPyCSCLiUjK28o6MEHBCziqhJBEW0dbx9ggAbGJYYhViAIwA7DXFVVUArE0ATGLF8opoLjge3rlRVrE2dolVAMyt5ZWtABxzAJyLTR1zXU49iRyRljGgNgC0rQAsCYiHNdOV1Y0TcxNNzTXJskA */
// createMachine({
//   id: "doggy",
//   initial: "Awake",
//   states: {
//     Asleep: {
//       on: {
//         "Loud noise": {
//           target: "Awake",
//         },
//         "Smell food": {
//           target: "Awake",
//         },
//       },
//     },
//     Awake: {
//       on: {
//         "Falls asleep": {
//           target: "Asleep",
//         },
//       },
//     },
//   },
// });


const machine = 
/** @xstate-layout N4IgpgJg5mDOIC5QHUCGAbA1gOjQSwBc8A7KAYgBkxUA3MAAgAsB7AWzEVAAdnZC9mxTiAAeiAEwAObAHYAzADYADArlyArJMXiZAFnEAaEAE9EARnVLscgJwylM+zMnib6m5IC+no2izYAeWJ6VHoAdwxMMgBxMAJ6ACNUAGNMJjYOJBAePiJBYTEEG2wbCx1dJSVxXRsFGTMFI1MEOV0zbCUzXX09Tv1JBW8fEGJmCDhhPxx8IlJhHP58rMKAWkkZDu07ZyV1M2cZJsQ5aRtq0rNJdQVLXTkzb19IwODQiP9iMDD6WAJUAgYZnmvEWQmW5jU2BukgqezcjkqjRMEjs2AGZ30ckqSnWN0eICmLxC4UiwNyAjBoEKZiUxWhsLM8PsKiOCHE4nUaIUZ3uDX2ihx+MJU3oYGI4wgZNBBUQKzMkPECmUcnZOgauiRzX0VgstTMHKqMm56iFpKyCzylNEsosG0VytV9QUGtZK0hDksNjOkkuuhkiqGniAA */
createMachine({
  id: "Walk",
  initial: "Waiting",
  states: {
    Waiting: {
      on: {
        "Leave home": {
          target: "On a walk",
        },
      },
    },
    "On a walk": {
      initial: "new state 1",
      states: {
        "new state 1": {},
      },
      on: {
        "Get back home": {
          target: "Walk ended",
        },
      },
    },
    "Walk ended": {
      type: "final",
    },
  },
})

const machine2 = 
/** @xstate-layout N4IgpgJg5mDOIC5QGECGAbdACAtqgxgBYCWAdmAHQCyx+ATgPYAOhD51ArgC6QDEHpHNzCJQTBrGJdibUSAAeiALQAWAEwAOCgE4VANgCsAZm0BGAOynTB09oA0IAJ7Kj5iqb3mNRvWu0m1czUVAF8QhzRMXAISdhp6ZlZ2AFVBYQheIR45cUlpWSQFZRVdCi8ABgNtAz1tS3L1B2cEEwoVI3KOvXarTuMwiIxsPCIySgA1YggwBgoAZVYAdzIoLAA3KZneAAlN9c2GHIkpGVI5RQQlDS1LdV9TFXM78tMmxEeKDRV27XK9bzU1nMRgMAxAkWGMTGFEm01muwgK32cN4CwYi2RMyOeVO52UHjc5nMehBpjURjUNRMKjeCFM5XKbQ62hZVj01k8GjC4RApAY03ghQh0VGcVojBYbEoVHS2JOBVAF1UGjcDPK5Ks2j0lUaTnxFM+vw0wWuxoMBkpYOFI1i0vFiSlFFSWUgcvyZ0KSpBbg02oZ-3MNSeRhpeoQxraxlMxvMLJeIK5POtULFCUl5DduM9yhsNw0lWqtXquuaSjUDUN5W82rUem1-zUVqGIttMIO8yWSI2cMzCqKlw8encNQ8v0BFlctNUKjK3g0tm6XisRlMTaiNuhsJmFARXYOvY9isQGgMbT8FuJJW1zNpZLUFHK-k8fhD3V9a8hoom+8KuXlh-7JRbFMMpiVJclKRJXQpzZWcjG8covHZXxrg-FsxgPPFLgMdRZwLGo6npEtlECIcNCNR4PBKAwvm5EIgA */
createMachine({
  id: "Call machine",
  type: "parallel",
  states: {
    Microphone: {
      initial: "Muted",
      states: {
        Muted: {
          on: {
            unmute: {
              target: "Unmuted",
            },
          },
        },
        Unmuted: {
          on: {
            mute: {
              target: "Muted",
            },
          },
        },
      },
    },
    Video: {
      initial: "Showing video",
      states: {
        "Showing video": {
          on: {
            "Hide video": {
              target: "Hiding video",
            },
          },
        },
        "Hiding video": {
          on: {
            "Show video": {
              target: "Showing video",
            },
          },
        },
      },
    },
  },
})