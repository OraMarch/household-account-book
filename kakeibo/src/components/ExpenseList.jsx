import { useState } from "react";

export const ExpenseList = ({list}) => {
    return (
        <ul className="list">
            {list.map((item) => (
                item.type === "支出" && 
                <li key={item.id}>
                    {item.date}{item.category}{item.expense}円
                </li>
            ))}
        </ul>
    )
} 