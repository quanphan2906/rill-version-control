import { useState } from "react";
import { ChevronDown, ChevronRight, Database, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "./SectionHeader";
import { FileUI } from "./File";

export default function Connectors() {
	const [isConnectorsOpen, setIsConnectorsOpen] = useState(false);

	const toggleConnectors = () => {
		setIsConnectorsOpen(!isConnectorsOpen);
	};

	return (
		<div className="border-t mt-4">
			<SectionHeader
				toggleOpen={toggleConnectors}
				isOpen={isConnectorsOpen}
				title="CONNECTORS"
			/>
			<div className={isConnectorsOpen ? "mt-1 mb-2" : ""}>
				{isConnectorsOpen && (
					<div className="space-y-1">
						<FileUI>
							<ChevronDown className="mr-1 h-4 w-4" />
							<Database className="mr-2 h-4 w-4" />
							<span>duckdb</span>
							<Badge
								variant="secondary"
								className="ml-auto text-xs"
							>
								OLAP
							</Badge>
						</FileUI>
						<FileUI sx="pl-8">
							<ChevronDown className="mr-1 h-4 w-4" />
							<Database className="mr-2 h-4 w-4" />
							<span>main_db</span>
						</FileUI>
						<FileUI sx="pl-12">
							<ChevronRight className="mr-1 h-4 w-4" />
							<Folder className="mr-2 h-4 w-4" />
							<span>main</span>
						</FileUI>
					</div>
				)}
			</div>
		</div>
	);
}
