import React, { useRef } from "react";

import { BryntumGantt } from "@bryntum/gantt-react";

import { ganttConfig } from "./config";

import "@bryntum/gantt/gantt.material.css";

const config = ganttConfig();

const GanttComponent: React.FC = () => {
	const ganttRef = useRef<BryntumGantt>(null);

	return <BryntumGantt ref={ganttRef} tasks={[]} {...config} />;
};

export default React.memo(GanttComponent);
