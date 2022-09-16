import './ExpenseDate.css';

function ExpenseDate(props) {
    
    // toLocalString returns a string with a language-sensitive and human readable date
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    //getFullYear returns a 4 digit number. Is compliant with years after 2000
    const year = props.date.getFullYear();

    return (
        <div className = 'expense-date'>
            <div className = 'expense-date__month'>{month}</div>
            <div className = 'expense-date__year'>{year}</div>
            <div className = 'expense-date__day'>{day}</div>
        </div>
    )
};
/*This allows us to export the ExpenseDate component (which is simply a function) so that it can be imported it into the ExpenseItem.js file. Remember this component logic was
extracted from our ExpenseItem component because we want to keep our logic within each component as lean and narrow focused as possible. If a component can be split into multiple ocmponents, then it is
good practice to do so*/

export default ExpenseDate;
