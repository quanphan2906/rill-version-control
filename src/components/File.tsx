import { File } from "lucide-react";

interface FileProps {
	children: React.ReactNode;
	sx?: string;
}

export const FileUI = ({ children, sx }: FileProps) => {
	return (
		<div
			className={`flex items-center px-2 py-1 hover:bg-accent cursor-pointer transition-colors ${sx}`}
		>
			<File className="mr-2 h-4 w-4" />
			<span>{children}</span>
		</div>
	);
};
