import { connectRefinementList } from "react-instantsearch-dom";
import { RefinementListProvided } from "react-instantsearch-core";
import { startCase } from "lodash";
import { AlgoliaClearRefinements } from "./clearRefinements";

const RefinementList = ({ items, refine }: RefinementListProvided) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.label}>
          <label className="flex items-center space-x-3 mb-3 hover:cursor-pointer">
            <input
              type="checkbox"
              name={`${item.label}`}
              className="bg-white bg-check h-6 w-6 rounded border-gray-300 text-primary focus:ring-secondary hover:cursor-pointer"
              checked={item.isRefined}
              onChange={() => refine(item.value)}
              value=""
            />
            <span className="truncate text-gray-700 dark:text-white font-normal">
            {startCase(item.label)} ({item.count})
            </span>
          </label>
        </li>
      ))}
      {items.length === 0 && (
        <AlgoliaClearRefinements />
      )}
    </ul>
  );
};

export const AlgoliaRefinementList = connectRefinementList(RefinementList);
