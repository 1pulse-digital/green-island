import { connectRefinementList } from "react-instantsearch-dom";
import { RefinementListProvided } from "react-instantsearch-core";
import { startCase } from "lodash";
import { AlgoliaClearRefinements } from "./clearRefinements";

const RefinementList = ({ items, refine }: RefinementListProvided) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.label}>
          <label className="flex items-center mb-3 space-x-3 hover:cursor-pointer">
            <input
              type="checkbox"
              name={`${item.label}`}
              className="w-6 h-6 bg-white rounded border-gray-300 hover:cursor-pointer bg-check text-primary focus:ring-secondary"
              checked={item.isRefined}
              onChange={() => refine(item.value)}
              value=""
            />
            <span className="font-normal text-gray-700 dark:text-white truncate">
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
