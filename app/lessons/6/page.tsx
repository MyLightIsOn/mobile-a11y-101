const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-center mb-10">Lesson 5: Navigating Tables</h1>

      <div className="text-left bg-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
        <p className="mb-4">
          Tables allow screen reader users to understand data arranged in rows
          and columns. This lesson shows a simple example for practice.
        </p>
        <div className="bg-gray-200 text-center text-black p-6 rounded mb-6">
          {/* Video placeholder */}
          <p className="italic">[Video demo coming soon]</p>
        </div>
        Try navigating this table by row and column. Screen readers will
        announce the row headers and column headers as you move.
      </div>

      <div className="text-white p-4 pt-10 max-w-[600px] mx-auto overflow-x-auto text-center">
        <table className="w-full border border-white" role="table">
          <thead>
            <tr>
              <th className="border p-2">Floor</th>
              <th className="border p-2">
                Room
                <br />1
              </th>
              <th className="border p-2">
                Room
                <br />2
              </th>
              <th className="border p-2">
                Room
                <br />3
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="border p-2">
                1
              </th>
              <td className="border p-2">Kitchen</td>
              <td className="border p-2">Living Room</td>
              <td className="border p-2">No more rooms on this floor</td>
            </tr>
            <tr>
              <th scope="row" className="border p-2">
                2
              </th>
              <td className="border p-2">Bedroom</td>
              <td className="border p-2">Bathroom</td>
              <td className="border p-2">Library</td>
            </tr>
            <tr>
              <th scope="row" className="border p-2">
                3
              </th>
              <td className="border p-2">Storage</td>
              <td className="border p-2">No more rooms on this floor</td>
              <td className="border p-2">No more rooms on this floor</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col pt-10">
        <a className="bg-white text-center p-3 mb-8" href="/practice/">
          Back
        </a>
      </div>
    </div>
  );
};

export default Page;
