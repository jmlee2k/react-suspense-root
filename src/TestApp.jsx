import { lazy, Suspense, useRef } from "react";
const B = lazy(()=>import("./B"));

export default function TestApp()
{
	const counter = useRef(0);
	counter.current++;
	console.log("rendering TestApp - counter",counter.current);
	return <Suspense fallback={<p>loading B...</p>}><B/></Suspense>
}