import { useState } from "react";
import { File } from "lucide-react";
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
import SectionHeader from "./SectionHeader";

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
			<div className="border-t">
				<SectionHeader
					toggleOpen={toggleVersionControl}
					isOpen={isVersionControlOpen}
					title="VERSION CONTROL"
				/>

				<div className="px-2 my-2 mt-1">
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
									<SelectItem value="develop">
										develop
									</SelectItem>
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
			</div>
			<ErrorModal
				isOpen={isErrorModalOpen}
				onClose={setIsErrorModalOpen}
			/>
		</>
	);
}
