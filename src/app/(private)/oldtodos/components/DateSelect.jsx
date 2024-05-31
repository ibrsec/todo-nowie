 
const DateSelect = ({allTodosDateCategory,selectedDate,setSelectedDate}) => {
  // useEffect(() => {
  //   setSelectedDate(Object.keys(allTodosDateCategory)[0]);

  // },[])
  return (
    <div className="my-10  flex items-center justify-center  ">
        <form className="max-w-sm mx-auto w-1/2">
          <label
            htmlFor="large"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white text-center"
          >
            Date select
          </label>
          <select
            id="large"
            className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <option value="-1">Select a date</option>
            {Object.keys(allTodosDateCategory).sort()
              .map((item,i) => (
                <option key={i} value={item}>{item}</option>
              ))}
          </select>
        </form>
      </div>
  )
}

export default DateSelect