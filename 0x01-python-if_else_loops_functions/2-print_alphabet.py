#!/usr/bin/python3
"""A program that pro=ints the ASCII alphabet, in lowercase, not followed by a new line."""
for letters in range(97, 123):
    print("{}".format(chr(letters)), end="")
