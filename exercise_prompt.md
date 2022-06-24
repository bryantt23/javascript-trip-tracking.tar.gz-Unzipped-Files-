## Trip Tracking Exercise

Let's write some code to track driving history for people.

You can use any programming language that you want. Please choose a language that allows you to best demonstrate your programming ability. We will provide a template solution in your language of your choice, and we will complete this exercise during your pairing interview session. Feel free to look ahead at the problem and practice solving it, however we will start from the blank template during the interview and attempt to implement the solution during that session. Reviewing the problem statement and practicing aren't necessary, and we will be available to answer any questions during the interview. If time allows, we may also introduce additional requirements.

The code will process an input file. You can either choose to accept the input via stdin (e.g. if you're using Ruby `cat input.txt | ruby yourcode.rb`), or as a file name given on the command line (e.g. `ruby yourcode.rb input.txt`). The template includes logic to support one or both of these mechanisms already and you'll be able to focus on the core logic.

Each line in the input file will start with a command. There are two possible commands.

The first command is Driver, which will register a new Driver in the app. Example:

`Driver Dan`

The second command is Trip, which will record a trip attributed to a driver. The line will be space delimited with the following fields: the command (Trip), driver name, start time, stop time, miles driven. Times will be given in the format of hours:minutes. We'll use a 24-hour clock and will assume that drivers never drive past midnight (the start time will always be before the end time). Example:

`Trip Dan 07:15 07:45 17.3`

Discard any trips that average a speed of less than 5 mph or greater than 100 mph.

Generate a report containing each driver with total miles driven and average speed. Sort the output by most miles driven to least. Round miles and miles per hour to the nearest integer.

Example input:

```
Driver Dan
Driver Lauren
Driver Kumi
Trip Dan 07:15 07:45 17.3
Trip Dan 06:12 06:32 21.8
Trip Lauren 12:01 13:16 42.0
```

Expected output:

```
Lauren: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Kumi: 0 miles
```

The template includes a single unit test that exercises the above example. Feel free to add additional tests. We only request that you leave this test unmodified.
