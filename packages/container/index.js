import Assessments from 'assessments';
import WordBank from 'word-bank';
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
    <div>
        <Assessments />
        <WordBank />
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
