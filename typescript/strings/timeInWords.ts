/**
 * timeInWords(hours, minutes)
 * 5:00 -> five o' clock
 * 5:01 -> one minute past five
 * 5:10 -> ten minutes past five
 * 5:15 -> quarter past five
 * 5:30 -> half past five
 * 5:40 -> twenty minutes to six
 * 5:45 -> quarter to six
 * 5:47 -> thirteen minutes to six
 * 5:28 -> twenty eight minutes past five
 * 12:45 -> quarter to one
 * 12:00 -> twelve o' clock
 * note the pattern of using 'past' or 'to'
 */

'5:00';
'5:01';
// are we given numbers or string?

const timeInWords = (hour: number, minutes: number) => {
    let timeConvertedToStringOfWords = ``;

    // instead of placeholder "zero", just look up minutes - 1?
    const timeWords = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'twenty one',
        'twenty two',
        'twenty three',
        'twenty four',
        'twenty five',
        'twenty six',
        'twenty seven',
        'twenty eight',
        'twenty nine',
        'quarter',
        'half',
    ];

    // if minutes is '00', find and print "o' clock"
    // if before the half, find something "past hour"
    // if the half, print "half past"
    // if after the half, find something "to hour"

    console.log(timeConvertedToStringOfWords);
    return timeConvertedToStringOfWords;
};

timeInWords(6, 20);
