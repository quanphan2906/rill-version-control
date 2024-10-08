import { useState } from "react";
import { ChevronDown, ChevronRight, Database, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "./SectionHeader";

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
			<div className={isConnectorsOpen ? "px-2 mt-1 mb-2" : ""}>
				{isConnectorsOpen && (
					<div className="space-y-1">
						<div className="flex items-center py-1">
							<ChevronDown className="mr-1 h-4 w-4" />
							<Database className="mr-2 h-4 w-4" />
							<span>duckdb</span>
							<Badge
								variant="secondary"
								className="ml-auto text-xs"
							>
								OLAP
							</Badge>
						</div>
						<div className="pl-6 space-y-1">
							<div className="flex items-center py-1">
								<ChevronDown className="mr-1 h-4 w-4" />
								<Database className="mr-2 h-4 w-4" />
								<span>main_db</span>
							</div>
							<div className="pl-6 space-y-1">
								<div className="flex items-center py-1">
									<ChevronRight className="mr-1 h-4 w-4" />
									<Folder className="mr-2 h-4 w-4" />
									<span>main</span>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
