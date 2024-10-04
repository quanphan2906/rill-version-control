import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

interface ErrorModalProps {
	isOpen: boolean;
	onClose: Dispatch<SetStateAction<boolean>>;
	title?: string;
	description?: string;
}

const ErrorModal = ({
	isOpen,
	onClose,
	title = "Error: Uncommitted Changes",
	description = "You have uncommitted changes. Please commit your changes before switching branches.",
}: ErrorModalProps) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<Button onClick={() => onClose(false)}>Close</Button>
			</DialogContent>
		</Dialog>
	);
};

export default ErrorModal;
