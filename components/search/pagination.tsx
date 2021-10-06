import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { Configure, connectPagination } from "react-instantsearch-dom";
import cn from "classnames";

interface PaginationProps {
  currentRefinement: number;
  nbPages: number;
  refine: (page: number) => void;
  createURL: () => void;
  hitsPerPage: number;
}

interface PageButtonProps {
  page: number;
  selected: boolean;
  onClick: (page: number) => void;
}

const PageButton = (props: PageButtonProps) => {
  return (
    <li
      aria-current={`page`}
      onClick={(e) => {
        e.preventDefault();
        props.onClick(props.page);
      }}
      className={cn({
        "relative w-[50px] inline-flex justify-center items-center py-2 border text-sm font-medium": true,
        "hover:cursor-pointer hover:bg-indigo-50": true,
        "z-10 bg-indigo-50 border-indigo-500 text-indigo-600": props.selected,
        "bg-white border-gray-300 text-gray-500 hover:bg-gray-50": !props.selected,
      })}
    >
      {props.page}
    </li>
  );
};

const Pagination = (props: PaginationProps) => {


  const pageButtons = new Array(props.nbPages).fill(null).map((_, idx) => {
    const maxNumberOfButtons = 7;
    const siblings = 3;
    const page = idx + 1;

    if (props.nbPages > maxNumberOfButtons) {
      // accepted range
      const min = Math.min(props.nbPages - maxNumberOfButtons + 1, Math.max(props.currentRefinement - siblings, 1));
      const max = Math.max(maxNumberOfButtons, Math.min(props.currentRefinement + siblings, props.nbPages));

      if (page < min || page > max) {
        return null;
      }
    }

    return (
      <PageButton key={idx} page={page} selected={props.currentRefinement === page} onClick={props.refine} />
    );

  });

  return (
    <>
      {/* Configure Algolia hits per page */}
      <Configure hitsPerPage={props.hitsPerPage} />

      <div className=" px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">

        {/* Mobile pagination */}
        <div className="flex-1 flex justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Next
          </a>
        </div>

        {/* Desktop pagination */}
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Page <span
              className="font-medium">{props.currentRefinement}</span> of <span
              className="font-medium">{props.nbPages}</span>
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <li
                onClick={(e) => {
                  e.preventDefault();
                  if (props.currentRefinement > 1) {
                    props.refine(props.currentRefinement - 1);
                  }
                }}
                className="relative hover:cursor-pointer hover:bg-secondary inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </li>

              {pageButtons}
              <li
                onClick={(e) => {
                  e.preventDefault();
                  if (props.currentRefinement < props.nbPages) {
                    props.refine(props.currentRefinement + 1);
                  }
                }}
                className="relative hover:cursor-pointer hover:bg-secondary inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </li>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export const AlgoliaPagination = connectPagination(Pagination);
