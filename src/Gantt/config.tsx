import { BryntumGanttProps } from "@bryntum/gantt-react";

export const ganttConfig = ({
	isPublic,
}: { isPublic?: boolean } = {}): BryntumGanttProps => ({
	height: window.innerHeight - (isPublic ? 200 : 250),
	taskResizeFeature: false,
	dependenciesFeature: false,
	dependencyEditFeature: false,
	cellEditFeature: false,
	taskEditFeature: false,
	zoomOnTimeAxisDoubleClick: false,
	onTaskMenuBeforeShow: () => false,
	projectLinesFeature: false,
	scrollTaskIntoViewOnCellClick: {
		block: "start",
		highlight: true,
		focus: true,
		y: false,
		edgeOffset: 20,
		animate: true,
	},
	scrollable: true,
	showOnClick: true,
	taskDragFeature: false,
	subGridConfigs: {
		locked: {
			width: 400,
		},
		normal: {
			flex: 1,
		},
	},
	features: {
		sort: {
			disabled: true,
		},
	},
	columns: [
		{
			type: "name",
			width: 250,
			renderer: function NameCell(args: any) {
				const { record } = args;

				const { name, type, obj_id, project_id } = record.originalData;

				if (type === "Experiment" && !isPublic) {
					return (
						<a
							color="inherit"
							href=""
							target="_blank"
							rel="noreferrer noopener"
						>
							{name}
						</a>
					);
				}

				return name;
			},
		},
		{
			text: "Status",
			width: 150,
			renderer: function StatusCell(args: any) {
				const { record } = args;

				const { status_id, status_name, type } = record.originalData;

				if (type === "Experiment") {
					return (
						<span>
							{status_id}: {status_name}
						</span>
					);
				}

				return null;
			},
		},
		{ type: "startdate", text: "Start Date", field: "originalData.startDate" },
		{ type: "enddate", text: "End Date", field: "originalData.endDate" },
	],
	taskRenderer: function Task({ taskRecord, renderData }: any) {
		const { name, status_id, type } = taskRecord.originalData;

		renderData.style = `background-color:#333`;
		renderData.wrapperCls = `${renderData.wrapperCls} gantt-parent-task`;

		return `${type}: ${taskRecord.name}`;
	},
});
