import '../styles/header.css';

export const Header = ({ text }) => {
    return (
        <header className="header">
            <h1>{text}</h1>
        </header>
    );
};