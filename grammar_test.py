import time

# Questions and answers
questions = [
    {"question": "Identify the correct sentence.", "choices": ["He go to school.", "He goes to school.", "He going to school."], "answer": 1},
    # Add 24 more challenging questions here
]

# Timer
start_time = time.time()
score = 0

# Loop through questions
for i, q in enumerate(questions):
    print(f"Question {i+1}: {q['question']}")
    for j, choice in enumerate(q['choices']):
        print(f"{j + 1}. {choice}")
    answer = int(input("Enter your answer: "))
    if answer == q["answer"] + 1:
        score += 1
    if time.time() - start_time > 1200:  # 20 minutes limit
        print("Time's up!")
        break
# Results
print(f"Your score: {score}/{len(questions)}")
if score >= 20:
    print("Congratulations! Proceed to subject selection.")
else:
    print("Sorry, you did not pass the grammar test.")
