interface FileProps {
	children: React.ReactNode;
	sx?: string;
}

export const FileUI = ({ children, sx }: FileProps) => {
	return (
		<div
			className={`flex items-center px-3 py-1 hover:bg-accent cursor-pointer transition-colors ${sx}`}
		>
			{children}
		</div>
	);
};
