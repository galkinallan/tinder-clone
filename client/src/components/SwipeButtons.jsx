import React from "react";
import "../styles/SwipeButtons.css";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";

function SwipeButtons() {
  return (
    <div className="button">
      <IconButton className="button__repeat">
        <ReplayIcon fontaize="large" />
      </IconButton>
      <IconButton className="button__left">
        <CloseIcon fontaize="large" />
      </IconButton>
      <IconButton className="button__star">
        <StarRateIcon fontaize="large" />
      </IconButton>
      <IconButton className="button__right">
        <FavoriteIcon fontaize="large" />
      </IconButton>
      <IconButton className="button__lightning">
        <FlashOnIcon fontaize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
