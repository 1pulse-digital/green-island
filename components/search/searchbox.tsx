import { connectSearchBox, PoweredBy } from "react-instantsearch-dom";
import { AlgoliaLogo } from "./logo";

interface SearchBoxProps {
  currentRefinement: string;
  refine: (value: string) => void;
}


const SearchBox = ({ currentRefinement, refine }: SearchBoxProps) => {
  return (
    <div className={"font-karla w-full grid relative"}>
      <input
        className={"shadow-sm rounded-full px-4 py-2 w-full"}
        type="search"
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}
        placeholder={"Search"}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck="false"
      />
      <div className={"flex mt-1 justify-end"}>
        <AlgoliaLogo />
      </div>
    </div>
  );
};

export const AlgoliaSearchBox = connectSearchBox(SearchBox);
