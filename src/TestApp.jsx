import { lazy, Suspense } from "react";
const B = lazy(()=>import("./B"));

export default function TestApp()
{
	console.log("rendering TestApp");
	return <Suspense fallback={<p>loading B...</p>}><B/></Suspense>
}