import { FC, useMemo } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ContentType } from "types";
import { TextEditor } from "./TextEditor";
import styles from "./AddBlockModal.module.scss";

type AddBlockModalProps = {
  isOpen: boolean;
  contentBlockType: ContentType;
  setShowModal: (flag: boolean) => void;
};

export const AddBlockModal: FC<AddBlockModalProps> = ({
  isOpen,
  contentBlockType,
  setShowModal,
}) => {
  const handleClose = () => setShowModal(false);

  const inputElement = useMemo(() => {
    switch (contentBlockType) {
      case ContentType.TEXT:
        return <TextEditor value="qwe" />;
    }
  }, [contentBlockType]);

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box className={styles.box}>
        <h3>Add block of type {contentBlockType}</h3>
        {inputElement}
      </Box>
    </Modal>
  );
};