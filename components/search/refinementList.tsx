import { connectRefinementList } from "react-instantsearch-dom";
import { RefinementListProvided, RefinementListExposed } from "react-instantsearch-core";
import { startCase } from "lodash";
import { AlgoliaClearRefinements } from "./clearRefinements";
import { SmallButton } from "../button";
import { useState } from "react";

const RefinementList = ({
                          items,
                          refine,
                          limit = 10,
                          showMore,
                        }: RefinementListProvided & RefinementListExposed) => {
  const [extended, setExtended] = useState(false);

  return (
    <ul>
      {items.map((item, idx) => (
        (idx < limit || extended) && (
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
        )
      ))}
      {showMore && items.length > limit && (
        <div className={"mb-4 flex justify-center"}>
          <SmallButton
            className={"text-sm py-1"}
            onClick={() => setExtended(!extended)}
            color={"primary"}>{extended ? "Show Less" : "Show More"}</SmallButton>
        </div>
      )}
      {items.length === 0 && (
        <AlgoliaClearRefinements />
      )}
    </ul>
  );
};

export const AlgoliaRefinementList = connectRefinementList(RefinementList);
