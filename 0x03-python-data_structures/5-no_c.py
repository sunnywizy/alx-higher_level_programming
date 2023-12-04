#!/usr/bin/python3
def no_c(my_string):
    string = my_string.translate({ord(num): None for num in "cC"})
    return string
