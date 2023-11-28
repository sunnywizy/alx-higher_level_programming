#!/usr/bin/python3
"""A program that prints all numbers from 0 t0 98
in decimal and in hexadecimal."""
for number in range(0, 99):
    print("{} = {}".format(number, hex(number)))
