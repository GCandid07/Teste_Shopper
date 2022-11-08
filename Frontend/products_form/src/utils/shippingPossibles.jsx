const constants = {
  startHour: 8,
  finalHour: 20,
  gapHour: 3,
  quantityChoosen: 5,
  interval: 2
};

export class ShippingPossibles {
  constructor(date) {
    this.requested_at = new Date(date);
    this.results      = this._rangeDatas(date);
  }

  _nextDay(date) {
    date.setDate(date.getDate() + 1);
    date.setHours(constants.startHour);

    return date;
  }

  _updateInitialHour(date) {
    date.setMinutes(0);
    date.setSeconds(0);

    const initialHour = date.getHours();

    if (initialHour + constants.gapHour >= constants.finalHour) return this._nextDay(date);
    if (initialHour + constants.gapHour < constants.startHour) return date.setHours(constants.startHour);

    date.setHours(initialHour + constants.gapHour);

    return date;
  }

  _rangeDatas(dateArg) {
   let date = this._updateInitialHour(dateArg);

   let possibleDateTimes = [];

   for (let i = 1; i <= constants.quantityChoosen; i++) {
      let lastPossibleDateTimes = possibleDateTimes.length ? possibleDateTimes[possibleDateTimes.length - 1].finalDateTime : date;
      let initialDateTime = this._addInitialHours(lastPossibleDateTimes);
      let finalDateTime   = this._addFinalHours(initialDateTime);

      possibleDateTimes.push({ initialDateTime, finalDateTime });
   }

   return possibleDateTimes;
  }

  _addInitialHours(dateCurrent) {
    const dateCopy = new Date(dateCurrent);

    if (dateCopy.getHours() > constants.finalHour - constants.interval) {
      dateCopy.setDate(dateCopy.getDate() + 1);
      dateCopy.setHours(constants.startHour);
    }

    return dateCopy;
  };

  _addFinalHours(dateCurrent) {
    const dateCopy = new Date(dateCurrent);

    dateCopy.setHours(dateCopy.getHours() + constants.interval);

    return dateCopy; 
  };
};
