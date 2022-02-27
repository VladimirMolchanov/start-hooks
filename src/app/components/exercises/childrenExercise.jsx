import React from "react";
import CollapseWrapper from "../common/collapse";
import SmallTitle from "../common/typografy/smallTitle";
import CardWrapper from "../common/Card";
import PropTypes from "prop-types";

const PageComponent = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return (
            <>
                <div className="d-flex">
                    <div className="me-2">{index + 1}.</div>
                    {React.cloneElement(child, { ...child.props })}
                </div>
            </>
        );
    });
};
PageComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <>
            <CollapseWrapper title="Упражнение">
                <p className="mt-3">
                    У вас есть компоненты Списка. Вам необходимо к каждому из них
                    добавить порядковый номер, относительно того, как они
                    располагаются на странице. Вы можете использовать как{" "}
                    <code>React.Children.map</code> так и{" "}
                    <code>React.Children.toArray</code>
                </p>

                <Component />
                <Component />
                <Component />
            </CollapseWrapper>

            <CardWrapper>
                <SmallTitle>Example</SmallTitle>
                <PageComponent>
                    <Component />
                    <Component />
                    <Component />
                </PageComponent>
            </CardWrapper>
        </>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
