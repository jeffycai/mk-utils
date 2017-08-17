import moment from 'moment'

function stringToMoment(v) {
    if (!v)
        return v
    return moment(v)
}

function momentToString(v, format) {
    if (!v)
        return v
    return moment(v).format(format)
}

export default {
    stringToMoment,
    momentToString
}