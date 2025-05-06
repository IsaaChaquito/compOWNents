

export const TableProps = ({ tableHeaders, tableContent, tableCaption }) => {
  return (
    // <div className="TABLE-CONTAINER text-left rounded-xs  overflow-hidden  border-gray-700 *:border-gray-700">
    //   {/* <caption className="caption-bottom caption- text-sm text-gray-700 font-semibold">
    //     {tableCaption}
    //   </caption> */}
    //   <div className="TABLE-HEADER  ">
    //     <div className="TABLE-ROW *:px-2 *:py-1 grid grid-cols-4 place-items-start text-blue-900 ">
    //       <span className="w-full font-semibold border">Prop</span>
    //       <span className="w-full font-semibold border">Default</span>
    //       <span className="w-full font-semibold border">Type</span>
    //       <span className="w-full font-semibold border">Description</span>
    //     </div>
    //   </div>
    //   <div className="TABLE-BODY text-sm font-medium text-gray-900">
    //     {props.map((prop) => (
    //       <div className="grid grid-cols-4 p-0.5 *:px-2 " key={prop.name}>
    //         <span className="">{prop.name}</span>
    //         <span className="">{prop.default}</span>
    //         <span className="">{prop.type}</span>
    //         <span className="">{prop.description}</span>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    

<div className="relative overflow-x-auto shadow-md rounded sm:rounded-md">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
        { tableCaption && <caption className="caption-top p-1 bg-gray-800 text-xl font-semibold ">
          {tableCaption}
        </caption>}
        <thead className="text-base text-gray-700  dark:text-gray-400">
            <tr>
              {
                tableHeaders?.map( header => 
                  <th key={header} scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                      {header}
                  </th>
                )
              }
            </tr>
        </thead>
        <tbody>
          {
            tableContent?.map( row => 
              <tr key={row.category} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                {Object.values(row).map((key, i) => 
                  <td key={i} className="px-6 py-4 text-base">
                    <span>{typeof key === 'object' ? key.map((item, i) => <div className="" key={i}>{item}</div>) : key}</span>
                  </td>
                )}
              </tr>

            )
          }
        </tbody>
    </table>
</div>

  )
}
