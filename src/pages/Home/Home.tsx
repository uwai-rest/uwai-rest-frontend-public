import { Link as RouterLink } from "react-router-dom";
import { Counter } from "@components/Counter";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import "./styles.css";

import reactLogo from "/images/react.svg";
import viteLogo from "/images/vite.svg";

export const Home = () => {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Link component={RouterLink} to="/about">
        Link a
      </Link>
      <div className="card">
        <Counter />
        {/* <Link href="/about">About page</Link> */}
        <Link href="/about">About</Link>
        <Button href="/about" variant="contained">
          About B
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};
