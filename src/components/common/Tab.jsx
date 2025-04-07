// Tab Component
// Props:
// - tabData: Array of tab objects (each with id, tabName, and type)
// - field: Currently selected tab type
// - setField: Function to update the selected tab

export default function Tab({ tabData, field, setField }) {
  return (
    // Container for the tab buttons
    <div
      style={{
        // Adds a subtle bottom border inside the container
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max"
    >
      {tabData.map((tab) => (
        <button
          key={tab.id} // Unique key for each tab
          onClick={() => setField(tab.type)} // Set active tab on click
          className={`${
            field === tab.type
              ? "bg-richblack-900 text-richblack-5" // Style for active tab
              : "bg-transparent text-richblack-200"  // Style for inactive tabs
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          {tab?.tabName} {/* Display tab label */}
        </button>
      ))}
    </div>
  );
}
