import { createMachine, assign } from "xstate";

export const temperatureMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOiwBdcA3MAYgGEBRAGQGUBJAVVYG0AGALqJQABwD2sXJTH5hIAB6IArAHYSARhUBOAGwAOFUoA0IAJ6JNarUoDM6gExKAvk5NoseQqQrU6AMQBBAAkAJUYAOSDGdgAVfiEkEHFJaVlExQQAFnsTcwQ9dRJnFxN8MQg4OXccAmI5ZKlcGTkMgFodXMR2kpBqz2IyTEoaeolG5vTEfRIVPS0+HUdOhHttEkyFxxcXIA */
  schema: {
    context: {} as {C: string | number | undefined, F: string | number | undefined},
    events: {} as | {type: 'CELSIUS' ; value: string} | {type: 'FAHRENHEIT' ; value: string}
  },
  initial: "active",
  context: { C: undefined, F: undefined },
  states: {
    active: {
      on: {
        CELSIUS: {
          actions: assign({
            C: (_, event) => {
              console.log({event})
              return event.value},
            F: (_, event) =>
              {
                console.log({event})
                return event.value.length ? +event.value * (9 / 5) + 32 : ""},
          }),
        },
        FAHRENHEIT: {
          actions: assign({
            C: (_, event) =>
              {
                console.log({event})
                return event.value.length ? (+event.value - 32) * (5 / 9) : ""},
            F: (_, event) => {
              console.log({event})
              return event.value},
          }),
        },
      },
    },
  },
});
