def fizzbuzz():
    for number in range(1, 101):
        if number % 3 == 0 and number % 5 == 0:
            print("FIZZBUZZ ", end="")
        elif number % 3 == 0:
            print("FIZZ ", end="")
        elif number % 5 == 0:
            print("BUZZ ", end="")
        else:
            print("{} ".format(number), end="")
