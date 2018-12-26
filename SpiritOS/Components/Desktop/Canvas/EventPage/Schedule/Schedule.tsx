import React from 'react'
import _ from 'lodash'
import __ from './_styles'
import moment from 'moment'
import ordinal from 'ordinal'

interface Props { eventId:number, schedule:any }

class Schedule extends React.Component<Props> {

  render(){

    const {
      eventId,
      schedule,
    } = this.props;

    const __ScheduleEntries = [];
    let entryTime, entryEndTime, entryDate, isActiveEntry, isPastEntry, isPastDate;

    const timeZone = 'America/Los_Angeles';
    const currentTime = moment();

    _.each( schedule, ( entry, i ) => {

      // TODO ADD MOMENT-TIMEZONE
      entryTime = moment(entry.start_time, 'MM-DD-YYYY hh:mmZ');
      entryEndTime = moment(entry.end_time, 'MM-DD-YYYY hh:mmZ');
      isPastDate = currentTime.dayOfYear() > entryTime.dayOfYear();

      if ( !entryDate || entryDate.dayOfYear() !== entryTime.dayOfYear() ){
        entryDate = entryTime.clone();
        __ScheduleEntries.push(
          <__.DayHeader key={`schedule-header-${entryDate.format('M/D')}-${eventId}`}>
            <__.Day>{ entryDate.format('ddd').toUpperCase() }</__.Day>
            <__.Date>{ entryDate.format('MMM Do') }</__.Date>
            {/* <__.Timezone>{ entryDate.format('z') }</__.Timezone> */}
          </__.DayHeader>
        )
      }

      isActiveEntry = currentTime.unix() > entryTime.unix() && currentTime.unix() < entryEndTime.unix()
      isPastEntry = currentTime.unix() > entryEndTime.unix();

      __ScheduleEntries.push(
        <__.Entry key={`schedule-entry-${i}-${eventId}`}>
          <__.Time>{ entryTime.format('h:mma').slice(0, -1) }</__.Time>
          <__.Text>{ entry.text }</__.Text>
        </__.Entry>
      )
    })

    return (
      <__.Schedule>
        { __ScheduleEntries }
      </__.Schedule>
    );

  }

};

export default Schedule;
