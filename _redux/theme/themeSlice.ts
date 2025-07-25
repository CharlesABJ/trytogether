import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    mode: "light" | "dark";
    accent: string;
}

const getThemeStorage = (): ThemeState => {
    if (typeof window !== "undefined") {
        const storedMode = localStorage.getItem("mode");
        const storedAccent = localStorage.getItem("accent");

        const isValidMode = storedMode === "light" || storedMode === "dark";
        const validStoredMode: "light" | "dark" = isValidMode ? storedMode as "light" | "dark" : "light";

        return {
            mode: validStoredMode,
            accent: storedAccent || "original",
        };
    }

    return {
        mode: "light",
        accent: "original",
    };
};

const initialState: ThemeState = getThemeStorage();

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; // Lors de l'action, le mode sera inversé
        },
        setMode: (state, action: PayloadAction<"light" | "dark">) => {
            state.mode = action.payload; // Lors de l'action, le mode sera la valeur passée par dispatch
        },
        setAccent: (state, action: PayloadAction<string>) => {
            state.accent = action.payload; // Lors de l'action, l'accent prendra la valeur passée par dispatch
        }
    }
})

export const { toggleMode, setAccent } = themeSlice.actions;
export default themeSlice.reducer;