import React, { useState, useEffect } from "react";
import CategoryTableLayout from "../Layouts/CategoryTableLayout.tsx";

type Props = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  handleEdit: any;
  handleDelete: any;
};
const CategoryListing = ({ data, handleEdit, handleDelete }: Props) => {
  const [categoryData, setCategoryData] = useState([]);
  const [columns, setColumns] = useState([]);
  

  // console.log(data);

  useEffect(() => {
    if (data) {
      const extractedData = data.data.map((item: any) => ({
        categoryName: item.categoryName,
        actions: (
          <div className="flex space-x-2">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => handleEdit(item._id)} // Assuming you have an id or similar
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleDelete(item._id)} // Assuming you have an id or similar
            >
              Delete
            </button>
          </div>
        ),
      }));

      // Only update state if data changes to avoid unnecessary re-renders
      setCategoryData(extractedData);

      // Set columns only once if not set yet to avoid re-renders
      if (columns.length === 0) {
        setColumns([
          { header: "Category Name", accessor: "categoryName" },
          { header: "Actions", accessor: "actions" },
        ]);
      }
    }
  }, [data]); // Add `columns` as a dependency if it's dynamically updated later

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="p-4 w-[800px] border shadow-2xl bg-slate-200 rounded">
        {/* Pass the extracted data and column configuration to the table layout */}
        <CategoryTableLayout data={categoryData} columns={columns} />
      </div>
    </div>
  );
};

export default CategoryListing;
