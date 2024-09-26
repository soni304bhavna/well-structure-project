import React from "react";

type Column = {
  header: string;
  accessor: string;
};

type Props = {
  columns: Column[];
  data: any[];
};

const CategoryTableLayout: React.FC<Props> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-bold mb-4">Category List</h2>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 border-b border-gray-200 whitespace-no-wrap text-sm leading-5 text-gray-700"
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTableLayout;
