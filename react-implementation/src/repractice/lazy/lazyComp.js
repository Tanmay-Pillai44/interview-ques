import React, { Suspense } from "react";
const Customer = React.lazy(() => import("./Customer.js"));
const Admin = React.lazy(() => import("./Admin.js"));

const LazyComp =  (props) => {
	if (props.user === "admin") {
		return (
			<Suspense fallback={<div>Loading</div>}>
				<Admin />
			</Suspense>
		);
	} else if (props.user === "customer") {
		return (
			<Suspense fallback={<div>Loading</div>}>
				<Customer />
			</Suspense>
		);
	} else {
		return <div> Invalid User </div>;
	}
};

export default LazyComp;