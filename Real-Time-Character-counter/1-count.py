import tkinter as tk

def update_char_count(event):
    text = text_area.get("1.0", "end-1c")  # Get the text from the text area
    total_count.set(len(text))
    remaining_count.set(150 - len(text))

# Create the main application window
app = tk.Tk()
app.title("Character Counter")
app.configure(bg="lightgreen")

# Custom fonts for labels and values
label_font = ("Helvetica", 12, "bold")
value_font = ("Helvetica", 12)

# Create StringVars to store the character counts
total_count = tk.StringVar()
remaining_count = tk.StringVar()

# Set initial values
total_count.set(0)
remaining_count.set(150)

# Create a text area widget with a margin
text_area = tk.Text(app, height=10, width=40, wrap=tk.WORD, padx=10, pady=10)
text_area.configure(font=value_font)
text_area.pack()

# Create labels to display the character counts
total_label = tk.Label(app, text="Total Characters:", font=label_font, fg="blue", bg="lightgreen")
total_label.pack()

total_count_label = tk.Label(app, textvariable=total_count, font=value_font, fg="blue", bg="lightgreen")
total_count_label.pack()

remaining_label = tk.Label(app, text="Remaining Characters:", font=label_font, fg="red", bg="lightgreen")
remaining_label.pack()

remaining_count_label = tk.Label(app, textvariable=remaining_count, font=value_font, fg="red", bg="lightgreen")
remaining_count_label.pack()

# Bind the text area to the function that updates the character counts
text_area.bind("<KeyRelease>", update_char_count)

# Run the main loop
app.mainloop()

