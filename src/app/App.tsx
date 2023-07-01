import { useTheme } from "shared/lib/theme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./router";
import {Navbar} from "../widgets/Navbar";


export const App = () => {
    const { theme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};
