import { css } from "@emotion/react";
import useScrolledBy from "@hooks/use-scrolled-by";
import { searchBarWrapperStyles, searchBarStyles } from "./styles";

type Props = {
  onSearch: (e: any) => void;
  title: string;
};

const SearchBar = ({ title = "", onSearch }: Props) => {
  const isScrolled = useScrolledBy();
  return (
    <div css={searchBarWrapperStyles}>
      <input
        type="text"
        onChange={onSearch}
        css={searchBarStyles(isScrolled)}
        placeholder={`Search ${title}`}
      />
    </div>
  );
};

export default SearchBar;
