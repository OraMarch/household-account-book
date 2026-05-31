import { useEffect, useState } from "react"


export const ExpenseForm = ({setList, list}) => {
    const [expense, setExpense] = useState(0);
    const [category, setCategory] = useState("食費");
    const [date, setDate] = useState("");
    const [memo, setMemo] = useState("");
    const [type, setType] = useState("");

    const [year, month, day] = date.split("-");

    useEffect(() => {
        console.log(year, month, day);
    }, [date]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, 
            { id: Date.now(), 
                expense,
                category,
                year,month,day,
                memo,
                type
            }
        ]);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="radio" name="typed" value="支出" defaultChecked onChange={(e) => setType(e.target.value)}/>支出
                <input type="radio" name="typed" value="収入" onChange={(e) => setType(e.target.value)}/>収入
                <select name="category_select" id="" onChange={(e) => setCategory(e.target.value)}>
                    <option value="食費">食費</option>
                    <option value="交通費">交通費</option>
                    <option value="日用品">日用品</option>
                </select>
                <input type="date" onChange={(e) => setDate(e.target.value)}/>
                <input type="number" placeholder="金額" onChange={(e) => setExpense(e.target.value)}/>
                <input type="text" placeholder="メモ" onChange={(e) => setMemo(e.target.value)}/>
                <button type="submit">追加</button>
            </form>
        </div>
    )
}