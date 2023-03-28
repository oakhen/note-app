import chalk from "chalk";
import * as fs from "node:fs";

/* add a new note */
export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNotes) {
    notes.push({
      title,
      body,
    });
    saveData(notes);
    console.log(`${chalk.green("Note added!")} ${chalk.magenta(":)")}`);
  } else {
    console.log(
      `Title ${chalk.red("already taken ")} use another title ${chalk.green(
        ":)",
      )}`,
    );
  }

  console.log(notes);
};

// const tasks = {
//   tasks: [
//     {
//       text: "grocery shoping",
//       competed: true,
//     },
//     {
//       text: "Clean yard",
//       competed: false,
//     },
//     {
//       text: "Film Course",
//       competed: false,
//     },
//   ],

//   getTasksTodo() {
//     return this.tasks.filter((task) => !task.competed);
//   },
// };

// console.log(tasks.getTasksTodo());

/* delete a note  */
export const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(`${chalk.green("note with title")} ${title} removed!!`);
    saveData(notesToKeep);
    console.log(notesToKeep);
  } else {
    console.log(
      `${chalk.red("no note found")} with title ${chalk.bgMagenta(title)}`,
    );
  }
};

/* List notes */

export const listNote = () => {
  const notes = loadNotes();
  console.log(chalk.magenta("Your note:"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

/* read a note */

export const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (!!note) {
    console.log(chalk.green("Title: ") + chalk.magenta(note.title));
    console.log(chalk.green("Note: ") + note.body);
  } else {
    console.log(chalk.red("No note with title: ") + title);
  }
};

/* save note function  */
const saveData = (note) => {
  const noteJson = JSON.stringify(note);
  fs.writeFileSync("note.json", noteJson);
};

/* load notes from json */
const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync("note.json");
    const dataJSON = bufferData.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
