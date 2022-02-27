import React, { useState } from "react";
import CollapseWrapper from "../common/collapse";
import SmallTitle from "../common/typografy/smallTitle";
import CardWrapper from "../common/Card";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const handleClick = () => {
        if (isAuth) {
            onLogOut();
        } else {
            onLogin();
        }
    };
    return (
        <>
            <button className="btn btn-primary" onClick={handleClick}>
                {!isAuth ? "Войти" : "Выйти из системы"}
            </button>
        </>
    );
};
SimpleComponent.propTypes = {
    isAuth: PropTypes.bool,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};

const withLoginPropsStyles = (Component) => (props) => {
    const [auth, setAuth] = useState(localStorage.getItem("auth") === "true");
    const handleLogin = () => {
        setAuth(true);
        localStorage.setItem("auth", "true");
    };
    const handleOnLogin = () => {
        setAuth(false);
        localStorage.setItem("auth", "false");
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={auth}
                onLogin={handleLogin}
                onLogOut={handleOnLogin}
            />
        </CardWrapper>
    );
};

const HocExercise = () => {
    const ComponentAuthButton = withLoginPropsStyles(SimpleComponent);
    return (
        <>
            <CollapseWrapper title="Упражнение">
                <p className="mt-3">
                    Вам необходимо реализовать компонент{" "}
                    <code>SimpleComponent</code>, который:
                </p>
                <ul>
                    <li>
                        Имеет параметры:<code>onLogin</code>, <code>onLogOut</code>,{" "}
                        <code>isAuth</code>
                    </li>
                    <li>
                        Отображайте кнопку <code>Войти</code>, если пользователь НЕ
                        авторизован.
                    </li>
                    <li>
                        Отображает кнопку с содержанием{" "}
                        <code>Выйти из системы</code>, если пользователь
                        авторизован.
                    </li>
                    <li>
                        При нажатии на кнопки вызываются методы <code>onLogin</code>{" "}
                        и <code>onLogOut</code>
                    </li>
                </ul>
                <p className="mt-3">
                    Вам необходимо <code>HOC</code>, который модифицирует компонент{" "}
                    <code>SimpleComponent</code> следующим образом:
                </p>
                <ul>
                    <li>
                        Добавляет обертку в виде карточки boostrap (использовать
                        существующий HOC)
                    </li>
                    <li>
                        Передает параметр <code>isAuth</code>, который является
                        результатом проверки наличия записи с названием{" "}
                        <code>user</code> в <code>localStorage</code>
                    </li>
                    <li>
                        Передает параметр <code>onLogin</code> и{" "}
                        <code>onLogOut</code> для управления записью с названием{" "}
                        <code>user</code> в <code>localStorage</code>
                    </li>
                </ul>
            </CollapseWrapper>
            <CardWrapper>
                <SmallTitle>Example</SmallTitle>
                <ComponentAuthButton/>
            </CardWrapper>
        </>
    );
};

export default HocExercise;
