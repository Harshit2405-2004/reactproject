import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Calendar from './Calendar';
import EventDetails from './EventDetails';
import EventForm from './EventForm';
import EventList from './EventList';
import Filter from './Filter';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Calendar} />
        <Route path="/events" component={EventList} />
        <Route path="/events/:id" component={EventDetails} />
        <Route path="/events/new" component={EventForm} />
        <Route path="/filter" component={Filter} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
