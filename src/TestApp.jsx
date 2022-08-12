import { lazy, Suspense, useRef, useState } from "react";
const B = lazy(()=>import("./B"));

let invokeCount = 0;

export default function TestApp()
{
	const renderCount = useRef(0);
	const [clickCount,setClickCount] = useState(0);
	renderCount.current++;
	invokeCount++;
	console.log("rendering TestApp - render count",renderCount.current,"invoke count",invokeCount,"click count",clickCount);
	return <>
		<Suspense fallback={<p>loading B...</p>}><B/></Suspense>
		<button onClick={()=>{console.log("clicked"); setClickCount(c=>c+1);}}>inc</button>
		<p>click count: {clickCount}</p>
	</>
}