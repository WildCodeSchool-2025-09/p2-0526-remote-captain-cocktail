import type react from "react";
import { createContext, useContext, useState } from "react";

type SortContextType = {
	sortAscending: boolean;
	toggleSort: () => void;
};

const SortContext = createContext<SortContextType | undefined>(undefined);

export const SortProvider = ({ children }: { children: React.ReactNode }) => {
	const [sortAscending, setSortAscending] = useState<boolean>(true);
	const toggleSort = () => setSortAscending((s) => !s);

	return (
		<SortContext.Provider value={{ sortAscending, toggleSort }}>
			{children}
		</SortContext.Provider>
	);
};

export const useSort = (): SortContextType | undefined => {
	return useContext(SortContext);
};

export default SortContext;
