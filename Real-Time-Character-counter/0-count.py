import tkinter as tk

def update_char_count(event):
    text = text_area.get("1.0", "end-1c")  # Get the text from the text area
    total_count.set(len(text))
    remaining_count.set(150 - len(text))

# Create the main application window
app = tk.Tk()
app.title("Character Counter")

# Create StringVars to store the character counts
total_count = tk.StringVar()
remaining_count = tk.StringVar()

# Set initial values
total_count.set(0)
remaining_count.set(150)

# Create labels to display the character counts
total_label = tk.Label(app, text="Total Characters:")
total_label.pack()

total_count_label = tk.Label(app, textvariable=total_count)
total_count_label.pack()

remaining_label = tk.Label(app, text="Remaining Characters:")
remaining_label.pack()

remaining_count_label = tk.Label(app, textvariable=remaining_count)
remaining_count_label.pack()

# Create a text area widget for user input
text_area = tk.Text(app, height=10, width=40)
text_area.pack()

# Bind the text area to the function that updates the character counts
text_area.bind("<KeyRelease>", update_char_count)

# Run the main loop
app.mainloop()

