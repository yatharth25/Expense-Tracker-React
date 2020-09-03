import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const Transaction_List = () => {
    const {transactions} = useContext(GlobalContext);


    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction = 
                {transaction}/> ))}
            </ul>
        </>
    )
}
