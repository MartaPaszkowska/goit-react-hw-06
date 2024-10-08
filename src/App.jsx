import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import css from "./App.module.css";

export default function App() {
	return (
		<div className={css.appContainer}>
			<h1>Phonebook</h1>
			<ContactForm />
			<SearchBox />
			<ContactList />
		</div>
	);
}
