import React from "react";
import { Ingredient } from "../../types/ingredients";

interface IngredientsProps {
  ingredients?: Ingredient[];
}

const TableHeaderCell = ({ value }: { value: string }) => {
  return (
    <th
      scope="col"
      className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {value}
    </th>
  );
};

export const Ingredients = (props: IngredientsProps) => {

  if (!props.ingredients || props.ingredients.length === 0) {
    return (<span className="text-gray-900">Ingredients not specified</span>);
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto ">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
              <tr>
                <TableHeaderCell value={"Name"} />
                <TableHeaderCell value={"Amount ( % )"} />
              </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
              {props.ingredients.map((ingredient, index) => (
                <tr key={index} className={"hover:bg-secondary/20"}>
                  <td className="p-4 whitespace-nowrap">
                    <div className="">
                      <div
                        className="text-sm font-medium text-gray-900 max-w-screen-sm lg:max-w-full truncate">{ingredient.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <span>{ingredient.amount || "-"}</span>
                      {ingredient.percentageOfDailyIntake && (
                        <em className={"text-gray-500"}> ( {ingredient.percentageOfDailyIntake}% )</em>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
