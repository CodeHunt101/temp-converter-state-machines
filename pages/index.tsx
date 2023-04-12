import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import { useMachine } from '@xstate/react';
import { temperatureMachine } from './machine';

export default function Home() {
  const [state, send] = useMachine(temperatureMachine);

  const { C, F } = state.context;

  return (
    <section>
      <label>
        <input
          type="number"
          id="celsius"
          value={C ?? ''}
          onChange={e => {
            send("CELSIUS", { value: e.target.value });
          }}
          placeholder="e.g., 0"
        />
        <span>˚C</span>
      </label>
      <div>=</div>
      <label>
        <input
          type="number"
          id="fahrenheit"
          value={F ?? ''}
          onChange={e => {
            send("FAHRENHEIT", { value: e.target.value });
          }}
          placeholder="e.g., 32"
        />
        <span>˚F</span>
      </label>
    </section>
  );
}
