import { useTheme } from "shared/lib/theme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "./router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";


export const App = () => {
    const { theme} = useTheme()
    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
};
