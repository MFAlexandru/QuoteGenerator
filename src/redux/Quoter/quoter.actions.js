import { NEXTQUOTE } from "./quoter.types";

export const nextQuote = () => {
    return {
        type: NEXTQUOTE,
    };
};
