# Solution 1: Command Line Menu System
solutions for:

Command Line Menu System
Create a program that:
Shows a menu of options
Uses a while loop for continuous operation
Has properly indented nested structures
Includes functions for each operation
Handles invalid inputs
Allows user to exit
Uses clear, consistent formatting

Game Score Tracker
Create a program that:
Tracks scores for multiple players
Has functions for:
Adding players
Recording scores
Showing rankings
Updating scores
Uses proper indentation throughout
Includes input validation
Handles ties appropriately
Uses appropriate data structures
def clear_screen():
    """Clear the console screen."""
    print("\n" * 50)

def print_menu():
    """Display the main menu options."""
    print("\n=== Task Management System ===")
    print("1. Add Task")
    print("2. View Tasks")
    print("3. Mark Task Complete")
    print("4. Remove Task")
    print("5. Clear All Tasks")
    print("6. Exit")
    print("===========================")

def add_task(tasks):
    """Add a new task to the list."""
    task = input("Enter task description: ").strip()
    if task:
        tasks.append({"description": task, "completed": False})
        print("Task added successfully!")
    else:
        print("Task cannot be empty!")

def view_tasks(tasks):
    """Display all tasks with their status."""
    if not tasks:
        print("No tasks found!")
        return

    print("\nCurrent Tasks:")
    print("-------------")
    for i, task in enumerate(tasks, 1):
        status = "✓" if task["completed"] else " "
        print(f"{i}. [{status}] {task['description']}")
    print()

def mark_complete(tasks):
    """Mark a task as complete."""
    view_tasks(tasks)
    if not tasks:
        return

    try:
        task_num = int(input("Enter task number to mark complete: "))
        if 1 <= task_num <= len(tasks):
            tasks[task_num-1]["completed"] = True
            print("Task marked as complete!")
        else:
            print("Invalid task number!")
    except ValueError:
        print("Please enter a valid number!")

def remove_task(tasks):
    """Remove a task from the list."""
    view_tasks(tasks)
    if not tasks:
        return

    try:
        task_num = int(input("Enter task number to remove: "))
        if 1 <= task_num <= len(tasks):
            removed_task = tasks.pop(task_num-1)
            print(f"Removed task: {removed_task['description']}")
        else:
            print("Invalid task number!")
    except ValueError:
        print("Please enter a valid number!")

def clear_tasks(tasks):
    """Clear all tasks from the list."""
    confirm = input("Are you sure you want to clear all tasks? (y/n): ").lower()
    if confirm == 'y':
        tasks.clear()
        print("All tasks cleared!")
    else:
        print("Operation cancelled.")

def main():
    tasks = []
    while True:
        print_menu()
        choice = input("Enter your choice (1-6): ")
        
        if choice == '1':
            add_task(tasks)
        elif choice == '2':
            view_tasks(tasks)
        elif choice == '3':
            mark_complete(tasks)
        elif choice == '4':
            remove_task(tasks)
        elif choice == '5':
            clear_tasks(tasks)
        elif choice == '6':
            print("Thank you for using the Task Management System!")
            break
        else:
            print("Invalid choice! Please select 1-6.")
        
        input("\nPress Enter to continue...")
        clear_screen()

if __name__ == "__main__":
    main()

# Solution 2: Game Score Tracker

class ScoreTracker:
    def __init__(self):
        self.players = {}  # Dictionary to store player scores
        
    def add_player(self, name):
        """Add a new player to the system."""
        name = name.strip().title()
        if not name:
            return "Player name cannot be empty!"
        if name in self.players:
            return f"Player '{name}' already exists!"
        
        self.players[name] = []
        return f"Player '{name}' added successfully!"
    
    def record_score(self, name, score):
        """Record a new score for a player."""
        name = name.strip().title()
        try:
            score = int(score)
            if score < 0:
                return "Score cannot be negative!"
        except ValueError:
            return "Score must be a valid number!"
        
        if name not in self.players:
            return f"Player '{name}' not found!"
        
        self.players[name].append(score)
        return f"Score {score} recorded for {name}!"
    
    def update_score(self, name, index, new_score):
        """Update a specific score for a player."""
        name = name.strip().title()
        try:
            new_score = int(new_score)
            if new_score < 0:
                return "Score cannot be negative!"
        except ValueError:
            return "Score must be a valid number!"
        
        if name not in self.players:
            return f"Player '{name}' not found!"
        
        try:
            self.players[name][index] = new_score
            return f"Score updated for {name}!"
        except IndexError:
            return "Invalid score index!"
    
    def get_player_average(self, name):
        """Calculate average score for a player."""
        scores = self.players.get(name, [])
        if not scores:
            return 0
        return sum(scores) / len(scores)
    
    def show_rankings(self):
        """Display player rankings based on average scores."""
        if not self.players:
            return "No players registered!"
        
        # Calculate averages and sort players
        rankings = []
        for name in self.players:
            avg = self.get_player_average(name)
            rankings.append((name, avg))
        
        # Sort by average score (descending)
        rankings.sort(key=lambda x: x[1], reverse=True)
        
        # Format and return rankings
        result = "\nPlayer Rankings:\n" + "-" * 30 + "\n"
        current_rank = 1
        previous_score = None
        for i, (name, avg) in enumerate(rankings):
            # Handle ties by keeping same rank
            if avg != previous_score:
                current_rank = i + 1
            previous_score = avg
            
            result += f"{current_rank}. {name}: {avg:.2f} "
            result += f"(Scores: {self.players[name]})\n"
        
        return result

def main():
    tracker = ScoreTracker()
    
    while True:
        print("\n=== Game Score Tracker ===")
        print("1. Add Player")
        print("2. Record Score")
        print("3. Update Score")
        print("4. Show Rankings")
        print("5. Exit")
        print("========================")
        
        choice = input("Enter your choice (1-5): ")
        
        if choice == '1':
            name = input("Enter player name: ")
            print(tracker.add_player(name))
            
        elif choice == '2':
            name = input("Enter player name: ")
            score = input("Enter score: ")
            print(tracker.record_score(name, score))
            
        elif choice == '3':
            name = input("Enter player name: ")
            if name in tracker.players:
                print(f"Current scores: {tracker.players[name]}")
                index = int(input("Enter score index to update: "))
                new_score = input("Enter new score: ")
                print(tracker.update_score(name, index, new_score))
            else:
                print(f"Player '{name}' not found!")
                
        elif choice == '4':
            print(tracker.show_rankings())
            
        elif choice == '5':
            print("Thank you for using Game Score Tracker!")
            break
            
        else:
            print("Invalid choice! Please select 1-5.")
        
        input("\nPress Enter to continue...")

if __name__ == "__main__":
    main()