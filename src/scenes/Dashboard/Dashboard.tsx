import { ActionButtons, NoteContent, NotesTree } from "./components";
import { mockNotes } from "./mock";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  return (
    <div className={styles.container}>
      <NotesTree />
      <ActionButtons />
      <NoteContent note={mockNotes[0]} />
    </div>
  );
};
