import tkinter as tk

class WordCounter(tk.Frame):
    def __init__(self, master):
        super().__init__(master)

        # Set the title of the window
        self.master.title("Word Counter")

        # Create a text area
        self.text_area = tk.Text(self)
        self.text_area.pack(fill="both", expand=True)

        # Create two labels
        self.word_count_label = tk.Label(self, text="Word Count:")
        self.character_count_label = tk.Label(self, text="Character Count:")

        # Pack the labels
        self.word_count_label.pack()
        self.character_count_label.pack()

        # Create two counters
        self.word_count = 0
        self.character_count = 0

        # Bind the <Key> event to the text area
        self.text_area.bind("<Key>", self.update_counters)

        # Update the counters
        def update_counters(self, event):
            # Get the text from the text area
            text = self.text_area.get("1.0", "end")

            # Update the word count
            self.word_count = len(text.split())

            # Update the character count
            self.character_count = len(text)

            # Update the labels
            self.word_count_label.configure(text="Word Count: {}".format(self.word_count))
            self.character_count_label.configure(text="Character Count: {}".format(self.character_count))

if __name__ == "__main__":
    root = tk.Tk()
    app = WordCounter(root)
    root.mainloop()

