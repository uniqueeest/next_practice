'use client';

// 테이블 헤더 타입 정의
type TableHeader = string;

// 테이블 행 데이터 타입 정의
interface TableRowData {
  category: string;
  details: string[];
}

// 테이블 컴포넌트의 props 타입 정의
interface TableProps {
  headers: TableHeader[];
  data: TableRowData[];
}

// 테이블 컴포넌트 정의
const Table = ({ headers, data }: TableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-[#EDEDED] text-[14px] whitespace-nowrap">
        <thead>
          <tr>
            <th className="border border-[#EDEDED] py-2.5 bg-[#F6F6F6] text-[#6D6D6D] font-medium" />
            {headers.map((header) => (
              <th
                key={header}
                className="border border-[#EDEDED] py-2.5 bg-[#F6F6F6] text-[#6D6D6D] font-medium"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="border border-[#EDEDED] text-center">
                {row.category}
              </td>
              {row.details.map((detail, detailIndex) => (
                <td
                  key={detailIndex}
                  className="border border-[#EDEDED] px-4 py-2 text-center"
                >
                  {detail}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
