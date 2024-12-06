import { useState } from "react";
import DatePicker from "react-datepicker";
const DatePickerField = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        if (date) setStartDate(date);
      }}
    />
  );
};
export default DatePickerField;
