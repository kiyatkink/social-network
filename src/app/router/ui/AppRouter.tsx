import {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../config/routerConfig";
import cls from "./AppRouter.module.scss"

export const AppRouter = () => {
    return <>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig)
                    .map(
                        ({ path, element }) =>
                            <Route path={path} element={
                                <div className={cls.wrapper}>
                                    { element }
                                </div>
                            } />
                    )}
            </Routes>
        </Suspense>
    </>
};

