"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  
  const getProductData = async () => {
    const list = []
    const query = '*[_type == "products"]';
    const data = await client.fetch(query);
    data.forEach((item) => {
      list.push(item)
    })
    setProducts(list)
  }
  
  const getCategoriesData = async () => {
    const list = []
    const query = '*[_type == "categories"]';
    const data = await client.fetch(query);
    data.forEach((item) => {
      list.push(item)
    })
    setCategories(list)
  }
  
  useEffect(() => {
    getProductData()
    getCategoriesData()
  },[])

  return (
    <AppContext.Provider
      value={{
        products,
        categories
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};