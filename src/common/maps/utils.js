/**
 * Return the id of the location targeted by the event
 * @param  {Event} event Occured event
 * @return {String}      Id of the location
 */
export function getLocationId(event) {
    return event.target.id;
}

/**
 * Return the name of the location targeted by the event
 * @param  {Event} event Occured event
 * @return {String}      Name of the location
 */
export function getLocationName(event) {
    return event.target.attributes.name.value;
}

/**
 * Indicate if the location targeted by the event is selected
 * @param  {Event} event Occured event
 * @return {Boolean}     Is the location selected
 */
export function getLocationSelected(event) {
    return event.target.attributes['aria-checked'].value === 'true';
}

export function getRanges(data) {
    let arr = [{ min: 0, max: 0 }, { min: 0, max: 0 }, { min: 0, max: 0 }, { min: 0, max: 0 }, { min: 0, max: 0 }, { min: 0, max: 0 }, { min: 0, max: 0 }];
    let minValue = 0;
    let maxValue = 0;
    let tempArray = [];

    if (data) {
        data.locations.forEach((obj, i) => {
            tempArray.push(obj.members);
        });
    }

    maxValue = Math.max(...tempArray);
    minValue = Math.min(...tempArray);

    let total = maxValue - minValue;
    let diff = Math.round(total / (arr.length - 1));
    let firstMinValue = maxValue - diff;

    arr.forEach((obj, i) => {
        obj.max = parseInt(i === 0 ? maxValue : arr[i - 1].min);
        obj.min = parseInt(i === 0 ? firstMinValue : i === arr.length - 2 ? minValue : obj.max - diff);
    })
    return arr;

}
