import { useState } from "react";
import { ChevronDown, File } from "lucide-react";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import { CustomActionSelect } from "@/components/CustomActionSelect";
import {} from "@radix-ui/react-dialog";
import ErrorModal from "./BranchSwitchErrorModal";

export default function VersionControl() {
	const [isVersionControlOpen, setIsVersionControlOpen] = useState(false);
	const [currentBranch, setCurrentBranch] = useState("feature/new-dashboard");
	const [currentAction, setCurrentAction] = useState("Stage and commit");

	const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

	const toggleVersionControl = () => {
		setIsVersionControlOpen(!isVersionControlOpen);
	};

	const handleBranchChange = (value: string) => {
		if (value !== currentBranch) {
			setIsErrorModalOpen(true);
		}
	};

	return (
		<>
			<div className="p-2 border-t mt-4">
				<div
					className="flex items-center justify-between cursor-pointer py-2 hover:bg-accent rounded-md transition-colors"
					onClick={toggleVersionControl}
				>
					<div className="font-semibold mb-2">VERSION CONTROL</div>
					<ChevronDown
						className={`h-4 w-4 transition-transform ${
							isVersionControlOpen ? "" : "transform rotate-180"
						}`}
					/>
				</div>

				{isVersionControlOpen && (
					<div className="space-y-4">
						<Select
							onValueChange={handleBranchChange}
							value={currentBranch}
						>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select branch" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="main">main</SelectItem>
								<SelectItem value="develop">develop</SelectItem>
								<SelectItem value="feature/new-dashboard">
									feature/new-dashboard
								</SelectItem>
							</SelectContent>
						</Select>

						<CustomActionSelect
							value={currentAction}
							onChange={setCurrentAction}
						/>

						<div className="space-y-1">
							<div className="flex items-center py-1">
								<File className="mr-2 h-4 w-4 text-green-500" />
								<span className="text-green-500">
									new_feature.js
								</span>
							</div>
							<div className="flex items-center py-1">
								<File className="mr-2 h-4 w-4 text-orange-500" />
								<span className="text-orange-500">
									modified_file.css
								</span>
							</div>
							<div className="flex items-center py-1">
								<File className="mr-2 h-4 w-4 text-red-500" />
								<span className="text-red-500">
									deleted_component.tsx
								</span>
							</div>
						</div>
					</div>
				)}
			</div>
			<ErrorModal
				isOpen={isErrorModalOpen}
				onClose={setIsErrorModalOpen}
			/>
		</>
	);
}
