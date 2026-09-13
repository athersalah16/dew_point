"use client";
import BaseSection from "@/app/common/components/BaseSection";
import { Product } from "@/app/types/Product";
import { ProductCategory, products } from "@/company_data/products";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import DiplayProduct from "./components/DiplayProduct";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { allCategories } from "@/company_data/categories";
import DisplayCategoriesSelectors from "./components/DisplayCategoriesSelector";
import DisplayCategories from "./components/DisplayCategories";
import { switchToTitle } from "@/app/utils/switchToTitle";
import DisplayBrands from "../components/DisplayBrands";

function page() {
  const params = useParams<{ category: string }>();
  const section = params.category ?? "";

  const selectedProducts = products[section as ProductCategory] ?? [];
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [results, setResults] = useState<Product[]>(selectedProducts);
  const router = useRouter();
  const categoris = [
    "All",
    ...(allCategories[section as ProductCategory] ?? []),
  ];

  const filterProducts = useCallback(() => {
    let filteredProducts = selectedProducts;
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter((product) =>
        product.category.toLowerCase().includes(selectedCategory),
      );
    }
    if (searchTerm.trim()) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (filteredProducts.length === 0) {
      setMessage("No Results Found");
    } else {
      setMessage("");
    }
    setResults(filteredProducts);
  }, [searchTerm, selectedProducts, selectedCategory]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    router.back();
  };

  const handleSelectedCategoryChange = (category: string) => {
    setSelectedCategory(category.toLowerCase());
  };
  if (results.length === 0 && !message)
    return (
      <BaseSection sectionID="products" className="mt-8">
        <div className="mt-8 text-center items-center min-h-screen p-10">
          <p className=" text-2xl lg:text-4xl font-bold text-blue-600">
            No products available in this category.{" "}
          </p>
        </div>
      </BaseSection>
    );
  return (
    <BaseSection sectionID="products" className="mt-8">
      <div className="flex flex-col mt-5 gap-8   px-4 py-5">
        <div
          onClick={handleClick}
          className="relative rounded-full flex w-24 flex-row justify-center items-center gap-2 hover:cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-300 border border-gray-200"
        >
          <ArrowLeft size={16} strokeWidth={1.5} /> Back
        </div>

        <div className="w-full flex gap-4  flex-col  ">
          <h1 className="text-center text-4xl  text-blue-600">
            {switchToTitle(section)} Products
          </h1>
          <div className="flex lg:justify-between flex-col py-3 lg:flex-row px-3">
            <div className="w-full lg:w-2xl">
              <Input
                placeholder="Search in products"
                className="focus-visible:ring-0 border focus-visible:border-blue-200 text-lg p-4"
                value={searchTerm}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <div className="mt-2 lg:mt-0">
              <DisplayBrands sectionName={section} />
            </div>
          </div>
          <div className="md:hidden flex  justify-center items-center">
            <DisplayCategoriesSelectors
              selectedCategory={selectedCategory}
              handleSelectedCategoryChange={handleSelectedCategoryChange}
              data={categoris}
            />
          </div>
          <DisplayCategories
            categoris={categoris}
            handleSelectedCategoryChange={handleSelectedCategoryChange}
            selectedCategory={selectedCategory}
          />
        </div>

        <p className="text-blue-900 font-extralight">
          Showing Products: {results.length}
        </p>

        {message && <p className="text-blue-600 text-2xl px-4">{message}</p>}

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-4">
          {results.map((product: Product, index) => (
            <DiplayProduct key={index} data={product} />
          ))}
        </div>
      </div>
    </BaseSection>
  );
}

export default page;
