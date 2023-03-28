import chalk from "chalk";
import * as fs from "node:fs";
import yargs from "yargs";
import { addNote, listNote, readNote, removeNote } from "./notes.js";

/* add command */
yargs.command({
  command: "add",
  describe: "creates a note",
  builder: {
    title: {
      describe: "will add the title to note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "content of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  },
});

/* by default jo sub command ka value defined hoga wo ek boolean hoga */

/* remove command */
yargs.command({
  command: "remove",
  describe: "removes a note",
  builder: {
    title: {
      describe: "remove item by title name",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    removeNote(argv.title);
  },
});

/* read command */
yargs.command({
  command: "read",
  describe: "reads a note from the list",
  builder: {
    title: {
      describe: "search your note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    readNote(argv.title);
  },
});

/* list command */
yargs.command({
  command: "list",
  describe: "list your notes",
  handler() {
    console.log("listing your notes");
    listNote();
  },
});

yargs.parse();


/* any changes i make here will be tracked by git  */