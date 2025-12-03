import React from 'react';
import Book from './Book'

const Library = () => {
    return (
        <div>
            <Book name="리액트를 다루는 기술" numOfPage={350} />
            <Book name="알고싶어요" numOfPage={200} />
            <Book name="배우고 싶은 타입스크립트" numOfPage={250} />
            <Book name="알고가자 자바스크립트" numOfPage={400} />
        </div>
    );
};

export default Library;