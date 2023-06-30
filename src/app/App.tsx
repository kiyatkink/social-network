import {Link} from "react-router-dom";
import { useTheme } from "shared/lib/theme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./router";


export const App = () => {

    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to="/">Главная</Link>
            <Link to="/about">Об авторе</Link>
            <AppRouter/>
        </div>
    );
};
