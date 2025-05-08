"use client";

const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-center mb-10">Lesson 5: Input Fields</h1>

      <div className="text-left bg-white p-4 rounded-sm info-box max-w-[500px] mx-auto">
        <p className="mb-4">
          Input fields allow screen reader users to type in answers or provide
          information. They must be labeled properly so the screen reader can
          announce their purpose.
        </p>
        <div className="bg-gray-200 text-center text-black p-6 rounded mb-6">
          {/* Video placeholder */}
          <p className="italic">[Video demo coming soon]</p>
        </div>
        Try typing the correct answer below and submitting it.
      </div>

      <div className="text-white p-4 pt-10 max-w-[500px] mx-auto">
        <table
          title="Practice table"
          className="w-full border border-white"
          role="table"
        >
          <thead>
            <tr>
              <th className="border p-2">left side of the table</th>
              <th className="border p-2">middle of the table</th>
              <th className="border p-2">right side of table</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Top row</td>
              <td className="border p-2">Top row</td>
              <td className="border p-2">Top row</td>
            </tr>
            <tr>
              <td className="border p-2">Middle row</td>
              <td className="border p-2">Middle row</td>
              <td className="border p-2">Middle row</td>
            </tr>
            <tr>
              <td className="border p-2">Bottom row</td>
              <td className="border p-2">Bottom row</td>
              <td className="border p-2">Bottom row</td>
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
