# Exercise 1
# Create a list named students containing some student names (strings).
# Print out the second student's name.
# Print out the last student's name.

students = ["Danny", "Steve", "Jim", "Todd"]
print(students[1])
print(students[-1])

# Exercise 2
# Create a tuple named foods containing the same number of foods (strings) as there are names in the studentslist.
# Use a forloop to print out the string "food goes here is a good food".

foods = ('cheese burger', 'hot dog', 'celery', 'pizza' )
for food in foods:
  print(food)


# Exercise 3
# Using a forloop, print just the last two food strings from foods.
for food in foods:
  while food!= 'cheese burger' or 'hot dog':
  #  print(food)


# Exercise 4
# Create a dictionary named home_town containing the keys of city, stateand population.
# Print a string with this format:
# "I was born in city, state - population of population"

    home_town = {
    'city': 'Winchester',
    'state': 'Massachusetts',
    'population': '27,912'
  }
  # print(home_town)


# Exercise 5
# Iterate over the key: value pairs in home_townand print a string for each item, for example:

for key, value in home_town.items():
  print(key, value)


# Exercise 6
# Create an empty list named cohort.
# Using a forloop, add one dictionary to the cohortlist for each student name. Each dictionary should have this shape:
# Iterate over cohortprinting out each element.

cohort = []