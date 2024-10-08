// components/FileExplorer.js
import { Plus, ChevronRight, Folder, File, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FileUI } from "./File";

export default function FileExplorer() {
	return (
		<div className="py-2">
			<div className="px-2">
				<Button className="w-full text-center">
					<Plus className="mr-2 h-4 w-4" />
					Add
					<ChevronDown className="ml-2 h-4 w-4" />
				</Button>
			</div>

			<div className="space-y-1 py-2">
				<FileUI>
					<ChevronRight className="mr-1 h-4 w-4" />
					<Folder className="mr-2 h-4 w-4" />
					<span>dashboards</span>
				</FileUI>
				<FileUI>
					<ChevronRight className="mr-1 h-4 w-4" />
					<Folder className="mr-2 h-4 w-4" />
					<span>models</span>
				</FileUI>
				<FileUI>
					<ChevronRight className="mr-1 h-4 w-4" />
					<Folder className="mr-2 h-4 w-4" />
					<span>sources</span>
				</FileUI>
				<FileUI>
					<File className="mr-2 h-4 w-4" />
					<span>README.md</span>
				</FileUI>
				<FileUI>
					<File className="mr-2 h-4 w-4" />
					<span>rill.yaml</span>
				</FileUI>
			</div>
		</div>
	);
}
