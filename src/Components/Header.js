import memo from '../Assets/memo-emoji.png';
import HeaderCss from './Header.module.css';

const Header = () => {
    return (
        <div className={HeaderCss.headerContainer}>
            <img src={memo} alt="todo logo" className={HeaderCss.logo}/>
            <h1 className={HeaderCss.title}>to do list</h1>
        </div>
    )
}

export default Header;