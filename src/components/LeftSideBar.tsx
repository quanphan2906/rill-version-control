"use client";

import Connectors from "./Connectors";
import FileExplorer from "./FileExplorer";
import ProjectTitle from "./ProjectTitle";
import VersionControl from "./VersionControl";

export function LeftSideBar() {
	return (
		<div className="h-100 w-64 bg-background border-r">
			<ProjectTitle />
			<FileExplorer />
			<Connectors />
			<VersionControl />
		</div>
	);
}
