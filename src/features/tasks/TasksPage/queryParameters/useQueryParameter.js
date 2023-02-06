import { useLocation } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();

    return (new URLSearchParams(location.search)).get(searchQueryParamName);
};