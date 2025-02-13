import { formatInput, timeSince, formatInputToDate, formatInputToDate2 } from "./utils/formatDate.js";
import chalk from "chalk";

const testdates = [
    "2023-01-01T12:34:56Z", 
    "2024-05-15T08:20:00Z",
    "2022-11-20T14:45:33Z",
    "2021-07-10T09:15:10Z",
    "2025-03-30T16:50:45Z"
];

testdates.forEach(date => {
    console.log(chalk.green(`Original Date: ${date}`));
    console.log(chalk.blue(`Formatted as 'MMM D, YYYY h:mm A': ${formatInput(date)}`));
    console.log(chalk.yellow(`Formatted as 'dddd, MMMM DD, YYYY': ${formatInputToDate(date)}`));
    console.log(chalk.magenta(`Formatted as 'MM/DD/YYYY': ${formatInputToDate2(date)}`));
    console.log(chalk.cyan(`Relative time: ${timeSince(date)}`));

    console.log('-----------------------------------');
});
