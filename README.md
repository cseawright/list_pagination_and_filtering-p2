# list_pagination_and_filtering-p2
project 2

This is a javascript project that takes a given list of users and displays them by sets of 10 on each page. If the number of users is not evenly divisible by 10 the remaining users will be listed on the following page.
The active page is highlighted to show its status.

Project contains only plain "vanilla" JavaScript and doesn't rely on jQuery, some other library, or any code snippets or plugins.

No inline JavaScript. All JS is linked from an external file.

Uses unobtrusive JavaScript to append markup for the pagination links. So none of the pagination link's markup is added into the HTML.

Pagination links are created. If there are 44 students, 5 links will be generated, if there’s 66 students, 7 links will be generated. Etc.

The first 10 students are shown when the page loads, and each pagination link displays the correct students.

Clicking on “1” in the pagination links shows students 1 to 10. Clicking “2” shows 11 to 20. Clicking “5” shows students 41 to 50, and so on.

Code comments have been added explaining how the functions work.
