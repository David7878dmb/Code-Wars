The purpose of the century function is to calculate the century in which a given year is located. To do this, use a simple formula based on division and rounding up.

Details:
    Parameter:
        year: A number that represents the year from which we want to obtain the century.
    Process:
        The function divides the year by 100 using year / 100.
        Then, use Math.ceil() to round the result up, since the century changes with each multiple of 100 (for example, the year 101 is in the 2nd century, not the 1st century).
    Return value:
        Returns an integer indicating the century in which the given year falls.