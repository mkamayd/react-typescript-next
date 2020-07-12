import Head from 'next/head';
import { useReducer } from 'react';

import Dashboard from '../components/dashboard';
import Branding from '../components/branding';
import AddNumbers from '../components/addNumbers';
import LoadData from '../components/loadData';
import Chart from '../components/chart';

import {StateContext, DispatchContext} from '../redux/contexts';
import reducer from '../redux/reducer';

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { numbers: [], isFetching:true });

  return (
    <div className="container">
      <Head>
        <title>Numbers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <main>
            <Branding />
            <AddNumbers/>
            <LoadData/>
            <Dashboard/>
            <Chart/>
          </main>
        </StateContext.Provider>
      </DispatchContext.Provider>

      <footer>
        <a
          href="https://www.linkedin.com/in/miguelgutierrezkamayd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Miguel's
          <img src="/linkedin.svg" alt="LinkedIn" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
