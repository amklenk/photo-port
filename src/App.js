import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  // state for contact rendering, set to false so won't render unless clicked on
  const [contactSelected, setContactSelected] = useState(false);

  // initialize the category state as an array, useState so we can change things going forward
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      />
      <main>
        {/* if the contact isn't selected, render the gallery and about */}
        {!contactSelected ? (
          <>
        <Gallery currentCategory={currentCategory}/>
        <About/>
          </>
        ):(
          // otherwise render the contact form
        <ContactForm/>
        )}
      </main>
    </div>
  );
}

export default App;