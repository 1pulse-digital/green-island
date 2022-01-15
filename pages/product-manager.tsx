import MainLayout from "../layouts/MainLayout";
import { Product } from "../types/product";
import { FileWithPath, useDropzone } from "react-dropzone";
import { ReactNode, useCallback, useEffect, useState } from "react";
import XLSX from "xlsx";
import { Ingredient } from "../types/ingredients";
import cn from "classnames";
import Button, { SmallButton } from "../components/button";
import { prettyPrice } from "../lib/calc";
import { exportProducts, upsertProduct } from "../lib/api";
import { useAuthContext } from "../contexts/authContext";
import { toast } from "react-hot-toast";
import { productForms } from "../types/productForms";
import { Popover } from "@headlessui/react";
import { Ingredients } from "../components/products/ingredients";

interface Filter {
  invalidOnly: boolean;
}

interface SingleItemProps {
  idx: number;
  item: ExcelProduct;
  filter: Filter;
}

const validateProduct = (product: Product): string | undefined => {
  let invalidReasons = [];
  if (!product.price) {
    invalidReasons.push("price is required");
  }

  if (!product.product_code) {
    invalidReasons.push("product_code is required");
  }

  if (
    !productForms.find(
      (f) => f.label.toLowerCase() === product.product_form?.toLowerCase(),
    )
  ) {
    if (
      !productForms.find(
        (f) => f.value.toLowerCase() === product.product_form?.toLowerCase(),
      )
    ) {
      invalidReasons.push(`product_form "${product.product_form}" is invalid`);
    }
  }

  if (product.ingredients?.find((i) => i.amount === "")) {
    invalidReasons.push(`ingredients and amounts mismatched`);
  }

  const slugRegEx = new RegExp("^[A-Za-z0-9-_.~]*$");
  if (!product.slug.match(slugRegEx)) {
    invalidReasons.push(`slug "${product.slug}" is invalid`);
  }

  const productCodeRegEx = new RegExp("[\r?\n]");
  if (product.product_code.match(productCodeRegEx)) {
    invalidReasons.push(`product_code "${product.product_code}" is invalid: can't contain line breaks`);
  }

  if (invalidReasons.length > 0) {
    return invalidReasons.join("; ");
  }
  return;
};

const SingleItem = ({ idx, item, filter }: SingleItemProps) => {
  const { authToken } = useAuthContext();
  const [invalidReason, setInvalidReason] = useState<string>();
  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      // const fetchedProducts = await fetchAPI(`/products?product_code=${encodeURI(item.product_code)}`);
      // if (fetchedProducts?.length === 1) {
      //   setProduct(fetchedProducts[0]);
      // }
    };

    fetch().finally(() => {
      setLoading(false);
    });
  }, [item, idx]);

  useEffect(() => {
    setInvalidReason(validateProduct(item));
  }, [item]);
  if (filter.invalidOnly && !invalidReason) {
    return null;
  }

  const handleUpdate = async () => {
    if (!authToken) {
      toast.error("Not signed in");
      return;
    }
    setLoading(true);
    try {
      const invalidReason = validateProduct(item);
      if (invalidReason) {
        toast.error(`${item.name} invalid: ${invalidReason}`, {
          duration: 5000,
        });
        setLoading(false);
        return;
      }
      const response = await upsertProduct(authToken, item);
      setProduct(response.entity as Product);
      setLoading(false);
      if (response.message.toLowerCase() === "created") {
        toast.success(`${item.name} ${response.message.toLowerCase()}`, {
          duration: 5000,
          icon: "🌱",
        });
      } else {
        toast.success(`${item.name} ${response.message.toLowerCase()}`);
      }
    } catch (e) {
      toast.error("Failed: " + e.toString());
    }
  };

  return (
    <tr
      className={cn(
        "relative hover:bg-secondary hover:text-white font-medium",
        { "text-red-400": invalidReason },
      )}>
      <th className={"cursor-pointer"} onClick={handleUpdate}>
        {isLoading ? "loading" : product ? product.id : "-"}
      </th>
      <th className={"pl-4 text-left"}>{item.row}</th>
      <th className={"pl-4 text-left"}>{item.name}</th>
      <th className={"pl-4 text-left"}>{item.product_code}</th>
      <th className={"pl-4 text-right"}>{prettyPrice(item.price || 0)}</th>
      <th className={"pl-4 text-left"}>{item.availability}</th>
      <th className={"pl-4 text-left"}>{item.variation}</th>
      <th className={"pl-4 text-left"}>{item.serving_size}</th>
      <th className={"pl-4 text-left"}>/{item.slug}</th>
      <th className={"pl-4 text-left"}>{invalidReason}</th>
      <th className={"pl-4 text-left"}>
        <Popover className="">
          <Popover.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </Popover.Button>

          <Popover.Panel
            className={"absolute right-1/4 z-10 p-10 bg-secondary rounded"}>
            <h2 className={"text-white text-lg"}>
              {item.name} [{item.product_code}] ingredients
            </h2>
            <Ingredients ingredients={item.ingredients} />
          </Popover.Panel>
        </Popover>
      </th>
    </tr>
  );
};

type RowType = { [key: string]: string };
const rowMap = {
  "Product Image file name": "A",
  "Main Category": "B",
  "Product Name": "C",
  "Stock Quantity": "D",
  "Product Short Description": "E",
  "Product Variation": "F",
  "Featured Product": "G",
  Benefits: "H",
  "Serving size": "I",
  "Membership level": "J",
  "Product Price": "K",
  "Sale Price": "L",
  "Product Code": "M",
  Ingredients: "N",
  Amount: "O",
  "Additional Ingredients": "P",
  Directions: "Q",
  Warning: "R",
  "Notice/caution": "S",
  Storage: "T",
  "Additional Information": "U",
  "Symptoms /Indications": "V",
  "Supplier | Brand": "W",
  "Product Form": "X",
  Disclaimer: "Y",
  Slug: "Z",
  Skip: "AA",
};

const parseIngredients = (names?: string, amounts?: string): Ingredient[] => {
  const nameList = names?.split(",") || [];
  const amountList = amounts?.split(",") || [];
  const result: Ingredient[] = [];

  if (nameList.length !== amountList.length) {
    console.warn(
      "Ingredient name list and amount list lengths don't match",
      { nameList },
      { amountList },
    );
    // throw Error(`Ingredient name list length (${nameList.length}) and amount list length (${amountList.length}) don't match:\n ` + JSON.stringify({ nameList }) + JSON.stringify({ amountList }));
  }

  for (const idx in nameList) {
    const name = nameList[idx];
    const amount = Number(idx) < amountList.length ? amountList[idx] : "";
    result.push({
      name: name.trim(),
      amount: amount.trim(),
      percentageOfDailyIntake: "",
    });
  }

  return result;
};

const parseProductForm = (value?: string): string => {
  if (value?.toLowerCase() === "capsules") {
    value = "capsule";
  }
  if (value?.toLowerCase() === "soft gel") {
    value = "softgel";
  }
  return (value || "").toLowerCase();
};

const parseServingSize = (value?: string | number): string => {
  return value?.toString() || "";
};

const parseProductCode = (value?: string | number): string => {
  return value?.toString().replace(/^\s+/g, '').replace(/$\s+/g, '').trim() || "";
};

const parseSlug = (slug?: string, name?: string): string => {
  if (slug) {
    return slug.toLowerCase().trim();
  }

  if (!name) {
    return "";
  }

  return encodeURI(name.toLowerCase().replaceAll(" ", "-").trim());
};

const parseAsNumber = (value?: string): number => {
  return Number.parseFloat(value || "0");
};

const parseAvailability = (
  value?: string,
): "otc" | "prescription" | undefined => {
  switch (value?.toLowerCase()) {
    case "otc":
      return "otc";
    case "prescription":
      return "prescription";
    default:
      return "prescription";
  }
};

const parseProduct = (row: RowType): Product => {
  return {
    id: -1,
    name: row[rowMap["Product Name"]] || "",
    description: row[rowMap["Product Short Description"]] || "",
    product_code: parseProductCode(row[rowMap["Product Code"]]),
    price: parseAsNumber(row[rowMap["Product Price"]]),
    variation: row[rowMap["Product Variation"]].toString() || "",
    directions: row[rowMap["Directions"]] || "",
    warning: row[rowMap["Warning"]] || "",
    availability: parseAvailability(row[rowMap["Membership level"]]),
    benefits: row[rowMap["Benefits"]] || "",
    additional_ingredients: row[rowMap["Additional Ingredients"]] || "",
    additional_information: row[rowMap["Additional Information"]] || "",
    notice: row[rowMap["Notice/caution"]] || "",
    storage: row[rowMap["Storage"]] || "",
    symptoms_indications: row[rowMap["Symptoms /Indications"]] || "",
    product_form: parseProductForm(row[rowMap["Product Form"]]) || "",
    supplier: row[rowMap["Supplier | Brand"]] || "",
    ingredients: parseIngredients(
      row[rowMap["Ingredients"]],
      row[rowMap["Amount"]],
    ),
    slug: parseSlug(row[rowMap["Slug"]], row[rowMap["Product Name"]]),
    serving_size: parseServingSize(row[rowMap["Serving size"]]),
    stock_quantity: parseAsNumber(row[rowMap["Stock Quantity"]]),
  };
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

interface ExcelProduct extends Product {
  row: number;
}

const ProductManager = () => {
  const { authToken } = useAuthContext();
  const [error, setError] = useState<string>();
  const [excelProducts, setExcelProducts] = useState<ExcelProduct[]>([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: FileWithPath) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        let errRow, errProduct;
        let productList: ExcelProduct[] = [];
        try {
          // Do whatever you want with the file contents
          // const binaryStr = reader.result;
          const workbook = XLSX.read(reader.result, { type: "array" });
          const sheetNames = workbook.SheetNames;
          const sheet = workbook.Sheets[sheetNames[0]];

          if (!sheet) {
            throw new Error("No sheet to select");
          }

          // parse the sheet
          const range = sheet["!ref"];

          const sheetData = XLSX.utils.sheet_to_json(sheet, {
            header: "A",
            range: range,
          }) as RowType[];
          let productIdx = 0;
          for (const rowIdx in sheetData) {
            if (+rowIdx < 2) {
              continue;
            }
            productIdx++;
            errRow = productIdx;
            const row = sheetData[rowIdx] as RowType;
            errProduct = row[rowMap["Product Name"]];
            if (row[rowMap["Skip"]]) {
              continue;
            }

            console.log(`parsing [ ${rowIdx} ] `);
            const product = parseProduct(row);
            console.log(`[ ${rowIdx} ]`, { row }, { product });
            productList.push({ ...product, row: +rowIdx + 1 });
          }

          setExcelProducts(productList);
          console.log({ sheetNames });
        } catch (e) {
          setError(`[${errRow} ${errProduct}] ${e.toString()}`);
        }
      };

      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ],
    onDrop,
  });

  // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //     <ul>
  //       {errors.map(e => (
  //         <li key={e.code}>{e.message}</li>
  //       ))}
  //     </ul>
  //   </li>
  // ));

  // This is another component but concise example
  const fileList = (files: FileWithPath[]): ReactNode =>
    files.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

  const [loading, setLoading] = useState(false);
  const handleUpdate = async () => {
    let newList = excelProducts;
    setLoading(true);
    if (!authToken) {
      toast.error("Not signed in");
      return;
    }

    try {
      for (const product of excelProducts) {
        const invalidReason = validateProduct(product);
        if (invalidReason) {
          toast.error(`${product.name} invalid: ${invalidReason}`, {
            duration: 5000,
          });
          await sleep(500);
          continue;
        }
        if (product.product_code) {
          const response = await upsertProduct(authToken, product);
          newList = newList.filter(
            (p) => p.product_code !== product.product_code,
          );
          if (response.message.toLowerCase() === "created") {
            toast.success(`${product.name} ${response.message.toLowerCase()}`, {
              duration: 5000,
              icon: "🌱",
            });
          } else {
            toast.success(`${product.name} ${response.message.toLowerCase()}`);
          }
          setExcelProducts(newList);
          await sleep(50);
        } else {
          setLoading(false);
          toast.error("No product code");
        }
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.error("Failed: " + e.toString());
    }
  };

  const [filter, setFilter] = useState({
    invalidOnly: false,
  });

  const handleExport = async () => {
    try {
      setLoading(true)
      await exportProducts();
      toast.success("Export complete");
      setLoading(false)
    } catch (e) {
      setLoading(false)
      toast.error("Something went wrong, check the console for more info");
    }
  };

  return (
    <MainLayout authRequired={false} roleRequired={undefined}>
      <div className={"grid gap-2 p-8 "}>
        <div className={"flex"}>
          <h1 className={"text-4xl font-semibold text-primary flex-grow"}>
            Product manager
          </h1>
          <SmallButton disabled={loading} color={"secondary"} onClick={handleExport}>Export</SmallButton>
        </div>
        <div
          {...getRootProps({
            className:
              "border-dashed border-2 border-secondary p-2 rounded-xl h-[100px] text-gray-600 cursor-pointer",
          })}>
          <input {...getInputProps()} />
          <p>Drag the upload file (.xlsx) here, or click to select the file</p>
        </div>
      </div>
      <div className={"px-4 divide-y-2 divide-primary divide-solid"}>
        <section>
          {error && <div className={"text-red-600"}>{error}</div>}

          <aside className={"flex gap-2"}>
            <h4 className={"font-semibold text-primary"}>Upload file:</h4>
            <ul>{fileList(acceptedFiles)}</ul>
          </aside>
          <div className={"m-4 flex gap-4"}>
            <Button color={"primary"} onClick={handleUpdate} disabled={loading}>
              Update
            </Button>
            <div>
              <h4>Filter</h4>
              <ul>
                <li>
                  <label className="flex items-center mb-3 space-x-3 hover:cursor-pointer">
                    <input
                      type="checkbox"
                      name={`invalid`}
                      className="w-6 h-6 bg-white border-gray-300 rounded hover:cursor-pointer bg-check text-primary focus:ring-secondary"
                      checked={filter.invalidOnly}
                      onChange={() =>
                        setFilter({
                          ...filter,
                          invalidOnly: !filter.invalidOnly,
                        })
                      }
                      value=""
                    />
                    <span className="font-normal text-gray-700 truncate dark:text-white">
                      Show invalid only
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className={"bg-gray-50"}>
          <table className="table-auto">
            <thead>
            <tr>
              <th>ID</th>
              <th>#</th>
              <th>Name</th>
              <th>Code</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Variation</th>
              <th>Serving Size</th>
              <th>Slug</th>
              <th />
            </tr>
            </thead>
            <tbody className={"text-gray-500 text-sm "}>
            {excelProducts.map((p, idx) => {
              return (
                <SingleItem
                  key={idx}
                  idx={idx + 1}
                  item={p}
                  filter={filter}
                />
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProductManager;
