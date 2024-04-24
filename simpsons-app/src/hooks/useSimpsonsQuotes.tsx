import { useState } from "react";
import { searchQuotes } from "../services/QuoteService";

export function useSimpsonsQuotes({search} : {search: string}) {
    const [responseQuotes, setResponseQuotes] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const getQuotes = async() => {
        try {
            setError(null);
            setLoading(true);
            const newQuotes = await searchQuotes({search});
            setResponseQuotes(newQuotes);
        }
        catch(e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }

    }

    return { quotes: responseQuotes, getQuotes, loading };
}