import Logo from '../assets/logo.svg';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img className="nav--logo" src={Logo} alt="logo" />
                <h3 className="nav--title">ReactFacts</h3>
                <h4 className="nav--project">React Course - Project 1</h4>
            </nav>
        </header>
    );
}

export default Header;
