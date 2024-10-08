// create a react component called SectionHeader

import { ChevronDown } from "lucide-react";

interface SectionHeaderProps {
	toggleOpen: () => void;
	isOpen: boolean;
	title: string;
}

export default function SectionHeader({
	toggleOpen,
	isOpen,
	title,
}: SectionHeaderProps) {
	return (
		<div
			className="flex items-center justify-between cursor-pointer hover:bg-accent transition-colors py-2 px-2"
			onClick={toggleOpen}
		>
			<div className="font-semibold">{title}</div>
			<ChevronDown
				className={`h-4 w-4 transition-transform ${
					isOpen ? "" : "transform rotate-180"
				}`}
			/>
		</div>
	);
}
