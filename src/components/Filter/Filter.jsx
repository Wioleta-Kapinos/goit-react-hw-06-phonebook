import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { filterContact } from "redux/actions";
import css from "./Filter.module.css";

export const Filter = () => {
    
    const filterInputId = nanoid();
    const dispatch = useDispatch();

    const handleChangeFilter = event => {
        const value = event.target.value;
        dispatch(filterContact(value));
    }

    return (
        <div className={css.filter}>
            <label 
            htmlFor={filterInputId}
            className={css.filterLabel}>
            Find contacts by name
            </label>
                <input
                    className={css.filterInput}
                    type="search"
                    name={filterInputId}
                    onChange={handleChangeFilter}
                ></input>
        </div>
    )
}