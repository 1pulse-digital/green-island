import MainLayout from "../layouts/MainLayout";
import { Product } from "../types/product";
import { FileWithPath, useDropzone } from "react-dropzone";
import { ReactNode, useCallback, useEffect, useState } from "react";
import XLSX from "xlsx";
import { Ingredient } from "../types/ingredients";
import cn from "classnames";
import Button from "../components/button";
import { prettyPrice } from "../lib/calc";
import { upsertProduct } from "../lib/api";
import { useAuthContext } from "../contexts/authContext";
import { toast } from "react-hot-toast";
import { productForms } from "../types/productForms";

interface Filter {
  invalidOnly: boolean;
}

interface SingleItemProps {
  idx: number,
  item: Product
  filter: Filter
}

const validateProduct = (product: Product): string | undefined => {
  let invalidReasons = [];
  if (!product.price) {
    invalidReasons.push("price is required");
  }

  if (!product.product_code) {
    invalidReasons.push("product_code is required");
  }

  if (!productForms.find(f => f.label.toLowerCase() === product.product_form?.toLowerCase())) {
    if (!productForms.find(f => f.value.toLowerCase() === product.product_form?.toLowerCase())) {
      invalidReasons.push(`product_form "${product.product_form}" is invalid`);
    }
  }

  const slugRegEx = new RegExp("^[A-Za-z0-9-_.~]*$");
  if (!product.slug.match(slugRegEx)) {
    invalidReasons.push(`slug "${product.slug}" is invalid`);
  }

  if (invalidReasons.length > 0) {
    return (invalidReasons.join("; "));
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
        toast.error(`${item.name} invalid: ${invalidReason}`, { duration: 5000 });
        setLoading(false);
        return;
      }
      const response = await upsertProduct(authToken, item);
      setLoading(false);
      if (response.message.toLowerCase() === "created") {
        toast.success(`${item.name} ${response.message.toLowerCase()}`, { duration: 5000, icon: "🌱" });
      } else {
        toast.success(`${item.name} ${response.message.toLowerCase()}`);
      }
    } catch (e) {
      toast.error("Failed: " + e.toString());
    }
  };

  return (
    <tr className={cn("hover:bg-secondary hover:text-white font-medium cursor-pointer", { "text-red-400": invalidReason })}
        onClick={handleUpdate}>
      <th>{isLoading ? "loading" : product ? product.id : "-"}</th>
      <th className={"pl-4 text-left"}>{idx}</th>
      <th className={"pl-4 text-left"}>{item.name}</th>
      <th className={"pl-4 text-left"}>{item.product_code}</th>
      <th className={"pl-4 text-right"}>{prettyPrice(item.price || 0)}</th>
      <th className={"pl-4 text-left"}>{item.availability}</th>
      <th className={"pl-4 text-left"}>{item.variation}</th>
      <th className={"pl-4 text-left"}>{item.serving_size}</th>
      <th className={"pl-4 text-left"}>/{item.slug}</th>
      <th className={"pl-4 text-left"}>{invalidReason}</th>
    </tr>
  );
};

type RowType = { [key: string]: string }
const rowMap = {
  "Product Image file name": "A",
  "Main Category": "B",
  "Product Name": "C",
  "Product Short Description": "D",
  "Product Variation": "E",
  "Featured Product": "F",
  "Benefits": "G",
  "Serving size": "H",
  "Membership level": "I",
  "Product Price": "J",
  "Sale Price": "K",
  "Product Code": "L",
  "Ingredients": "M",
  "Amount": "N",
  "Additional Ingredients": "O",
  "Directions": "P",
  "Warning": "Q",
  "Notice/caution": "R",
  "Storage": "S",
  "Additional Information": "T",
  "Symptoms /Indications": "U",
  "Supplier | Brand": "V",
  "Product Form": "W",
  "Disclaimer": "X",
  "Slug": "Y",
  "Skip": "Z",
};
//
// export interface ExcelRow {
//   [index: string]: string;
//
//   A:
//
// }

const parseIngredients = (names?: string, amounts?: string): Ingredient[] => {
  const nameList = names?.split(",") || [];
  const amountList = amounts?.split(",") || [];
  const result: Ingredient[] = [];

  if (nameList.length !== amountList.length) {
    console.warn("Ingredient name list and amount list lengths don't match", { nameList }, { amountList });
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

const parseSlug = (slug?: string, name?: string): string => {
  if (slug) {
    return slug.toLowerCase();
  }

  if (!name) {
    return "";
  }

  return encodeURI(name.toLowerCase().replaceAll(" ", "-"));
};

const parsePrice = (value?: string): number => {
  return Number.parseFloat(value || "0");
};

const parseAvailability = (value?: string): "otc" | "prescription" | undefined => {
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
    product_code: row[rowMap["Product Code"]] || "",
    out_of_stock: false,
    price: parsePrice(row[rowMap["Product Price"]]),
    variation: row[rowMap["Product Variation"]] || "",
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
    ingredients: parseIngredients(row[rowMap["Ingredients"]], row[rowMap["Amount"]]),
    slug: parseSlug(row[rowMap["Slug"]], row[rowMap["Product Name"]]),
    serving_size: parseServingSize(row[rowMap["Serving size"]]),
  };

};

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const ProductManager = () => {
  const { authToken } = useAuthContext();
  const [error, setError] = useState<string>();
  const [excelProducts, setExcelProducts] = useState<Product[]>([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file: FileWithPath) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        let errRow, errProduct;
        let productList: Product[] = [];
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

            const product = parseProduct(row);
            console.log(`[ ${rowIdx} ]`, { row }, { product });
            productList.push(product);
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
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
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
  const fileList = (files: FileWithPath[]): ReactNode => (
    files.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ))
  );

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
          toast.error(`${product.name} invalid: ${invalidReason}`, { duration: 5000 });
          await sleep(1500);
          continue;
        }
        if (product.product_code) {
          const response = await upsertProduct(authToken, product);
          newList = newList.filter(p => p.product_code !== product.product_code);
          if (response.message.toLowerCase() === "created") {
            toast.success(`${product.name} ${response.message.toLowerCase()}`, { duration: 5000, icon: "🌱" });
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
    invalidOnly: true,
  });

  return (
    <MainLayout authRequired={false} roleRequired={undefined}>
      <div className={"grid grid-cols-2"}>
        <h1 className={"text-xl font-semibold text-primary"}>Product manager</h1>
        <div  {...getRootProps({ className: "border-dashed border-2 border-secondary p-2 rounded-xl h-[100px] w-[390px] text-gray-600 cursor-pointer" })}>
          <input {...getInputProps()} />
          <p>Drag the upload file (.xlsx) here, or click to select the file</p>
        </div>
      </div>
      <section>
        {error && (
          <div className={"text-red-600"}>{error}</div>
        )}

        <aside className={"flex gap-2"}>
          <h4 className={"text-lg font-semibold"}>Upload file:</h4>
          <ul>{fileList(acceptedFiles)}</ul>
        </aside>
        <div className={"m-4 flex gap-4"}>

          <Button color={"primary"} onClick={handleUpdate} disabled={loading}>Update</Button>
          <div>
            <h4>Filter</h4>
            <ul>
              <li>
                <label className="flex items-center mb-3 space-x-3 hover:cursor-pointer">
                  <input
                    type="checkbox"
                    name={`invalid`}
                    className="w-6 h-6 bg-white rounded border-gray-300 hover:cursor-pointer bg-check text-primary focus:ring-secondary"
                    checked={filter.invalidOnly}
                    onChange={() => setFilter({ ...filter, invalidOnly: !filter.invalidOnly })}
                    value=""
                  />
                  <span className="font-normal text-gray-700 dark:text-white truncate">
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
              <SingleItem key={idx} idx={idx + 1} item={p} filter={filter} />
            );
          })}
          </tbody>
        </table>
      </div>

    </MainLayout>
  );
};

export default ProductManager;
