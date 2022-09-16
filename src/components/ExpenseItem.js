//This import allows us to use the styling from ExpenseItem.css. 
import './ExpenseItem.css';
/*This is another component that originally was part of this ExpenseItem.js but to keep the component lean, the logic for our date object was split into it's own component 
and called in on line 10 as opposed to having all the logic crowd out multiple lines in this component.*/
import ExpenseDate from './ExpenseDate';
/*This is a custom component (line 9-18). In the function parameters is 'props' which stands for property. Propsallows us to access the array of object key value pairs in 
App.js (line 32-51).*/
function ExpenseItem(props) {
    //In the return statement is our JSX syntax. JSX is a combination of JavaScript   
    return (
    <div className="expense-item">
        <ExpenseDate date= {props.date} ></ExpenseDate>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    </div>
    );
};
//This allows us to export the ExpenseItem component (which is simply a function) so that it can imported it into the App.js file.
export default ExpenseItem;