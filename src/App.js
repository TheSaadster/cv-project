import React, { useState } from 'react';
import PrintProvider, { NoPrint, Print } from 'react-easy-print';
import uniqid from 'uniqid';
import EducationSection from './components/education';
import ExpirienceSection from './components/experience';
import GeneralSection from './components/general';
import './styles/App.css';
import './styles/forms.css';

const App = () => {
  const [educationIds, setEducationIds] = useState([]);
  const [experienceIds, setExperienceIds] = useState([]);

  const handleClick = (type) => {
    if (type === 'experienceIds') {
      setExperienceIds((prevExpIds) => [...prevExpIds, uniqid()]);
    } else {
      setEducationIds((prevEduIds) => [...prevEduIds, uniqid()]);
    }
  };

  const handleDelete = (type, id) => {
    if (type === 'experienceIds') {
      setExperienceIds((prevExpIds) => {
        let newList = prevExpIds.filter((key) => key !== id);
        return newList;
      });
    } else {
      setEducationIds((prevEduIds) => {
        let newList = prevEduIds.filter((key) => key !== id);
        return newList;
      });
    }
  };

  const eduComponents = educationIds.map((id) => (
    <EducationSection key={id} id={id} handleDelete={handleDelete} />
  ));
  const expComponents = experienceIds.map((id) => (
    <ExpirienceSection key={id} id={id} handleDelete={handleDelete} />
  ));

  return (
    <div>
      <PrintProvider>
        <NoPrint>
          <main>
            <h1 className='title'>CV-Application Creator</h1>
            <Print>
              <h2 className='subTitle'>General Information</h2>
              <GeneralSection />
            </Print>
            <div>
              <Print>
                <h2 className='subTitle'>Education</h2>
                {eduComponents}
              </Print>
              <button
                className='addBtn'
                onClick={() => handleClick('educationIds')}>
                Add
              </button>
            </div>
            <div>
              <Print>
                <h2 className='subTitle'>Work Experience</h2>
                {expComponents}
              </Print>
              <button
                className='addBtn'
                onClick={() => handleClick('experienceIds')}>
                Add
              </button>
            </div>
            <button
              onClick={() => {
                window.print();
              }}
              className='addBtn'>
              Print
            </button>
          </main>
        </NoPrint>
      </PrintProvider>
    </div>
  );
};

export default App;