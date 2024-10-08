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
import { FileUI } from "./File";

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

				<div className="my-2 mt-1">
					{isVersionControlOpen && (
						<div className="space-y-4">
							<div className="px-2">
								<Select
									onValueChange={handleBranchChange}
									value={currentBranch}
								>
									<SelectTrigger className="w-full">
										<SelectValue placeholder="Select branch" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="main">
											main
										</SelectItem>
										<SelectItem value="develop">
											develop
										</SelectItem>
										<SelectItem value="feature/new-dashboard">
											feature/new-dashboard
										</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="px-2">
								<CustomActionSelect
									value={currentAction}
									onChange={setCurrentAction}
								/>
							</div>

							<div className="space-y-1">
								<FileUI sx="text-green-500">
									<File className="mr-2 h-4 w-4" />
									<span>new_model.sql</span>
								</FileUI>
								<FileUI sx="text-orange-500">
									<File className="mr-2 h-4 w-4" />
									<span>modified_source.yaml</span>
								</FileUI>
								<FileUI sx="text-red-500">
									<File className="mr-2 h-4 w-4" />
									<span>deleted_dashboard.yaml</span>
								</FileUI>
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
