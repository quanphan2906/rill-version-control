// components/FileExplorer.js
import { Plus, ChevronRight, Folder, File, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FileExplorer() {
	return (
		<div className="p-2">
			<Button className="w-full text-center">
				<Plus className="mr-2 h-4 w-4" />
				Add
				<ChevronDown className="ml-2 h-4 w-4" />
			</Button>

			<div className="space-y-1 py-2">
				<div className="flex items-center py-1">
					<ChevronRight className="mr-1 h-4 w-4" />
					<Folder className="mr-2 h-4 w-4" />
					<span>dashboards</span>
				</div>
				<div className="flex items-center py-1">
					<ChevronRight className="mr-1 h-4 w-4" />
					<Folder className="mr-2 h-4 w-4" />
					<span>models</span>
				</div>
				<div className="flex items-center py-1">
					<ChevronRight className="mr-1 h-4 w-4" />
					<Folder className="mr-2 h-4 w-4" />
					<span>sources</span>
				</div>
				<div className="flex items-center py-1">
					<File className="mr-2 h-4 w-4" />
					<span>README.md</span>
				</div>
				<div className="flex items-center py-1">
					<File className="mr-2 h-4 w-4" />
					<span>rill.yaml</span>
				</div>
			</div>
		</div>
	);
}
