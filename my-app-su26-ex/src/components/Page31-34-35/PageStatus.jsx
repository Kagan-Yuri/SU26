  import * as React from "react";
   import { StatusContext } from "./StatusContext";
   
   export function Page4() {
       return <h1>Page 1</h1>;
   }
   
   export function Page5() {
       return <h1>Page 2</h1>;
  }
  
  export function Page6() {
      return <h1>Page 3</h1>;
  }
  
  export function Status() {
      const [status] = React.useContext(StatusContext);
      return <p>Status: {status}</p>;
  }
  export function SetStatus() {
      const [status, setStatus] = React.useContext(StatusContext);
      
      return (
          <input
              value={status}
              onChange={(e) => setStatus(e.target.value)}
          />
      );
  }