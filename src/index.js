import { lazy, Suspense } from "react";
import {createRoot} from "react-dom/client";
const TestApp = lazy(()=>import("./TestApp"));

const root = createRoot(document.getElementById("root"));

//single render
//root.render(<TestApp/>);

//suspense causes double-render
root.render(<Suspense fallback={<p>loading testapp...</p>}><TestApp/></Suspense>);