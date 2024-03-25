// Events.js
import React from 'react';
import './Events.css';

// Import data directly
import eventsData from './EventsData'; // Adjust the path based on your project structure


const Events = () => {
  // Use the imported data directly
  const events = eventsData;

  // Render table rows
  const renderTableRows = () => {
    return events.map((event) => (
      <tr key={event.sno}>
        <td>{event.sno}</td>
        <td>{event.name}</td>
        <td>{event.date}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h2 className='eventsheading2'>Events</h2>
      <table className='events'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name of the Workshop/FDP</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table><br></br><br></br>
    </div>
  );
};

export default Events;
