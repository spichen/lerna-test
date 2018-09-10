import Assessments from 'assessments';
import WordBank from 'word-bank';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        <Assessments name="Alef Education" />
        <WordBank />
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
