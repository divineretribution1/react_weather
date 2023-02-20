import React, { useState, useRef } from 'react';
import { useGetWeather } from './api';
import { Header, Loader } from './components'
import { Main } from './components'
import { Error } from './components';

function App() {
  const [location, setLocation] = useState('')

  const inputRef = useRef('')

  const getWeather = useGetWeather(location)

  const { data, isLoading, isError } = getWeather

  return (
    <div className="app">
      <Header inputRef={inputRef} setLocation={setLocation}/>
      <Loader isLoading={isLoading} />
      <Error isError={isError} />
      <Main data={data} />
    </div>
  );
}

export default App;
