import { useState } from "react";
import { useHistory } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faSave,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { ContainedButton as Button } from "components";
import styles from "./ControlPanel.module.scss";

export const ControlPanel = () => {
  const [isInEditMode, setIsInEditMode] = useState(true);
  const history = useHistory();

  return (
    <div className={styles.wrap}>
      <FormControlLabel
        control={
          <Switch
            checked={isInEditMode}
            onChange={() => setIsInEditMode(!isInEditMode)}
          />
        }
        label={isInEditMode ? "Edit: ON" : "Edit: OFF"}
        labelPlacement="end"
      />
      <div className={styles.buttons}>
        <Button disabled={!isInEditMode}>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          Cancel
        </Button>
        <Button
          disabled={!isInEditMode}
          onClick={() => history.push("/qweqweqw")}
        >
          <FontAwesomeIcon icon={faSave} />
          Save
        </Button>
        <Button disabled={!isInEditMode}>
          <FontAwesomeIcon icon={faTrashAlt} />
          Delete
        </Button>
      </div>
    </div>
  );
};
