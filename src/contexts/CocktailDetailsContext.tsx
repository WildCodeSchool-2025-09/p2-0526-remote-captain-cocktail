import { createContext, useContext, useState } from "react";
import type { DetailsContext } from "../types/types";

const CocktailDetailsContext = createContext<DetailsContext | null>(null);

export function CocktailDetailsProvider({
	children,
}: { children: React.ReactNode }) {
	const [id, setId] = useState<string | null>(null);
	return (
		<CocktailDetailsContext.Provider value={{ id, setId }}>
			{children}
		</CocktailDetailsContext.Provider>
	);
}

export const useId = () => {
	const value = useContext(CocktailDetailsContext);
	if (value == null) {
		throw new Error("useId has to be used within <CocktailDetailsProvider>");
	}

	return value;
};
