import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface FavoritesContextTypes {
	favorites: string[];
}
const FavoritesContext = createContext<FavoritesContextTypes | undefined>(
	undefined,
);
const STORAGE_KEY = "cocktail-favorites";

function FavoritesProvider({ children }: { childre: ReactNode }) {
	const [favorites, setFavorites] = useState<string[]>(() => {
		const addedToFav = localStorage.getItem(STORAGE_KEY);
		return addedToFav ? JSON.parse(addedToFav) : [];
	});

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
	}, [favorites]);
}
