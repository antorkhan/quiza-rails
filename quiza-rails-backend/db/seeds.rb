# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
course = Course.create(name: 'Geography 101', description: 'First Geography Course')
lesson_1 = course.lessons.create(name: 'Mid Term Lessons', description: 'Geography Term Geography Lesson Description')
lesson_1.questions.create(text: 'Which one is the capital of Bangladesh?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'Dhaka', correct_option: 4)
lesson_1.questions.create(text: 'Which one is the capital of India?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'New Delhi', correct_option: 4)
lesson_1.questions.create(text: 'Which one is the capital of Pakistan?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'New Karachi', correct_option: 4)

lesson_2 = course.lessons.create(name: 'Final Term Lessons', description: 'Geography Term Geography Lesson Description')
lesson_2.questions.create(text: 'Which one is the capital of Bangladesh?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'Dhaka', correct_option: 4)
lesson_2.questions.create(text: 'Which one is the capital of India?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'New Delhi', correct_option: 4)
lesson_2.questions.create(text: 'Which one is the capital of Pakistan?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'New Karachi', correct_option: 4)

course = Course.create(name: 'Social 102', description: 'Second Social Course')
lesson_1 = course.lessons.create(name: 'Mid Term Lessons', description: 'Social Term Social Lesson Description')
lesson_1.questions.create(text: 'Which one is the capital of Bangladesh?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'Dhaka', correct_option: 4)
lesson_1.questions.create(text: 'Which one is the capital of India?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'New Delhi', correct_option: 4)
lesson_1.questions.create(text: 'Which one is the capital of Pakistan?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'New Karachi', correct_option: 4)

lesson_2 = course.lessons.create(name: 'Final Term Lessons', description: 'Social Term Social Lesson Description')
lesson_2.questions.create(text: 'Which one is the capital of Bangladesh?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'Dhaka', correct_option: 4)
lesson_2.questions.create(text: 'Which one is the capital of India?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'New Delhi', correct_option: 4)
lesson_2.questions.create(text: 'Which one is the capital of Pakistan?', option_1: 'Noakhali', option_2: 'Barisal', option_3: 'Chandpur', option_4: 'New Karachi', correct_option: 4)