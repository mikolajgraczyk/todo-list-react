import { Input } from "../Input/styled";
import { Wrapper } from "./styled";
import searchQueryParamName from "../queryParameters/searchQueryParamName";
import { useQueryParameter } from "../queryParameters/useQueryParameter";
import { useReplaceQueryParameter } from "../queryParameters/useReplaceQueryParameter";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Wrapper>
            <Input
                placeholder="Wyszukaj"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};

export default Search;