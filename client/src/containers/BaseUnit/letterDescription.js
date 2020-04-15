import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./tifinaghLetterStyle";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LetterDescriptions({ letters, letterTypes }) {
  const classes = useStyles();

  const togglePlay = (sound) => {
    const audio = new Audio(require(`../../assets/sounds/lettersounds/${letterTypes}/${sound}.mp3`));
    audio.play();
  };
  const renderLetter = (letters) => {
    return letters.map((item, index) => {
      return (
        <div className="item" key={index}>
          <div style={styles.letterContainer}>
            <h1 style={styles.newText}>{item.latin}</h1>
            <h1 style={styles.secondText}>{item.arabic}</h1>
          </div>
          <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
            <div style={styles.container}>
              <h1 style={styles.letterFont}>{item.tifinagh}</h1>
            </div>
            <div style={styles.audioContainer}>
              <i className="fa fa-volume-up" style={{ fontSize: "6rem", color: "white" }} onClick={() => togglePlay(item.sound)} />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={classes.root}>
      <div style={{ flex: 8, display: "flex", flexDirection: "column" }}>
        <div
          id="sync1"
          className="owl-carousel owl-theme"
          style={{
            flex: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          {renderLetter(letters)}
        </div>
        <div
          id="sync2"
          className="owl-carousel owl-theme"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {letters.map((item, index) => {
            return (
              <div
                key={`${index}_index`}
                className="item"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "60px",
                }}
              >
                <h1 style={{ margin: 0 }}>{item.tifinagh}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
