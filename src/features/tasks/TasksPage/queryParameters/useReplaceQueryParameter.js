import { useHistory, useLocation } from "react-router-dom";

export const useReplaceQueryParameter = () => {
    const history = useHistory();
    const location = useLocation();

    return ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        history.push(`${location.pathname}?${searchParams}`);
    }
};