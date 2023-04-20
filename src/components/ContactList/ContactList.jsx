import css from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilterValue } from "redux/selectors";
import { deleteContact } from "redux/actions";

export const ContactList = () => {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilterValue);
    const filteredContactsBook = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    const dispatch = useDispatch();

    const deleteContactBook = contact => {
        dispatch(deleteContact(contact))
    }
    
    return (
        <div>
            <ul className={css.contactList}>
                {filteredContactsBook.map(( {id, name, number }) =>
                <li className={css.itemList}
                key={id}>
                    <p className={css.itemName}>{name}</p>
                    <p className={css.itemNumber}>{number}</p>
                    <button
                    className={css.btnDelete}
                    type="button"
                    name="Delete"
                    onClick={() => deleteContactBook(id)}>Delete contact
                    </button>
                </li>
                )}
            </ul>
        </div>
    )
}