import { nanoid } from "nanoid";
import { getContacts } from "redux/selectors";
import { addContact } from "redux/actions";
import { useSelector, useDispatch} from "react-redux";
import css from "./ContactForm.module.css";

export const ContactForm = () => {

    const nameInputId = nanoid();
    const numberInputId = nanoid();
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const userBook = {
            id: nanoid(), name, number,
        }
        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contacts.`);
            return;
        } 
        dispatch(addContact(userBook));
        form.reset();
        }

    return (
        <div className={css.contactForm}>
            <form onSubmit={handleSubmit} className={css.form}>
                <label 
                    htmlFor={nameInputId}
                    className={css.label}>
                    Name
                </label>
                <input 
                    id={nameInputId}
                    className={css.input}
                    name="name"
                    type="text"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                ></input>
                <label 
                    htmlFor={numberInputId}
                    className={css.label}>
                    Number
                </label>
                <input
                    id={numberInputId}
                    className={css.input}
                    type="tel"
                    name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                ></input>
                <button 
                    type="submit"
                    className={css.addContact}>Add contact</button>
            </form>
        </div>
    )
}