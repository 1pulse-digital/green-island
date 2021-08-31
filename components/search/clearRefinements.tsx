import { connectCurrentRefinements } from "react-instantsearch-dom";
import {
  CurrentRefinementsExposed,
  CurrentRefinementsProvided,
} from "react-instantsearch-core";


interface AlgoliaClearRefinementsProps extends CurrentRefinementsExposed {
  customTitle?: string;
}

const ClearRefinements = (props: CurrentRefinementsProvided & AlgoliaClearRefinementsProps) => {
  const {
    items,
    refine,
    customTitle,
  } = props;

  if (props.items.length === 0) {
    return null;
  }

  return (
    <button
      className="text-gray-500 hover:text-primary"
      onClick={() => refine(items)}
    >
      {customTitle ? customTitle : "Clear filters"}
    </button>
  );
};


const BaseClearRefinements = connectCurrentRefinements(ClearRefinements);

export const AlgoliaClearRefinements = (props: AlgoliaClearRefinementsProps) => {
  return (
    <BaseClearRefinements {...props} />
  );
};
