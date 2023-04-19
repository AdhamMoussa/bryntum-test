import React from "react";

import Gantt from "./Gantt";

const App: React.FC = () => {
	return (
		<div>
			<Gantt />
		</div>
	);
};

export default React.memo(App);
