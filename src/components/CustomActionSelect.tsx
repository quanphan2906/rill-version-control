import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";

interface CustomActionSelectProps {
	value: string;
	onChange: (value: string) => void;
}

export const CustomActionSelect = ({
	value,
	onChange,
}: CustomActionSelectProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleActionClick = () => {
		// Perform the action here
		console.log(`Performing action: ${value}`);
	};

	return (
		<div className="flex border rounded-md overflow-hidden">
			<button
				className="px-3 py-2 text-sm flex-grow text-left bg-background text-foreground hover:bg-accent transition-colors"
				onClick={handleActionClick}
			>
				{value}
			</button>
			<Popover open={isOpen} onOpenChange={setIsOpen}>
				<PopoverTrigger asChild>
					<button className="px-2 py-2 border-l bg-background hover:bg-accent transition-colors">
						<ChevronDown className="h-4 w-4" />
					</button>
				</PopoverTrigger>
				<PopoverContent className="w-[200px] p-0">
					<div className="flex flex-col">
						<button
							className="px-3 py-2 text-sm text-left hover:bg-accent"
							onClick={() => {
								onChange("Stage and commit");
								setIsOpen(false);
							}}
						>
							Stage and commit
						</button>
						<button
							className="px-3 py-2 text-sm text-left hover:bg-accent"
							onClick={() => {
								onChange("Push to remote");
								setIsOpen(false);
							}}
						>
							Push to remote
						</button>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default CustomActionSelect;
