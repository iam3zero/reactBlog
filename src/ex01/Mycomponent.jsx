import React from 'react';

const Mycomponent = ({name, children}) => { /* 밑에 const Mycomponent = (props) => { 를 입력하지 않고 해당 수식으로도 가능함*/

    return (
        <div>
            안녕하세요 제 이름은 {name} 입니다 <br />
            children 값은 {children} 입니다. {/* props.name, props.children 이라고 하지 않고 const {name, children} = props; 로 지정해주고 입력해도 됨*/}
        </div>
    );
};
Mycomponent.defaultProps={
    name: '기본 이름'
}

export default Mycomponent;