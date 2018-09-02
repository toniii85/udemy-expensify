import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
            console.log(e.target.value);
          }} />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            } else {
              this.props.dispatch(sortByDate());
            }
          }}>
          <option value="date" >Fecha</option>
          <option value="amount" >Importe</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDatePlaceholderText={"Fecha inicio"}
          endDate={this.props.filters.endDate}
          endDatePlaceholderText={"Fecha fin"}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          showClearDates={true}
          numberOfMonths={1}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
}
export default connect(mapStateToProps)(ExpenseListFilters);