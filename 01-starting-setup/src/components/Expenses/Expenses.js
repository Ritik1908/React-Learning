import './Expenses.css'
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <Card className='expenses'>
      <ExpenseItem
        date={props.items[0].date}
        amount={props.items[0].amount}
        title={props.items[0].title}
      />
      <ExpenseItem
        date={props.items[1].date}
        amount={props.items[1].amount}
        title={props.items[1].title}
      />
      <ExpenseItem
        date={props.items[2].date}
        amount={props.items[2].amount}
        title={props.items[2].title}
      />
      <ExpenseItem
        date={props.items[3].date}
        amount={props.items[3].amount}
        title={props.items[3].title}
      />
    </Card>
  );
}

export default Expenses