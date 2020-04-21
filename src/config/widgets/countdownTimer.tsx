const countdownTimer = {
  name: "Countdown Timer",

  route: "/countdowntimer",
  alias: "cd",
  settings: {
    hours: {
      type: "number",
      label: "Hours"
    },
    minutes: {
      type: "number",
      label: "Minutes"
    },
    seconds: {
      type: "number",
      label: "Seconds"
    },
    background: {
      type: "string",
      label: "Background color",
    },
    color: {
      type: "string",
      label: "Text color",
    },
    width: {
      type: "number",
      label: "Container width",
    },
    fontFamily: {
      type: "string",
      label: "Font family",
    },
    fontSize: {
      type: "string",
      label: "Font family",
    },
    fontWeight: {
      type: "string",
      label: "Font family",
    },
    fontStyle: {
      type: "string",
      label: "Font family",
    },
    letterSpacing: {
      type: "string",
      label: "Character spacing",
    },
    paddingTop: {
      type: "number",
      label: "Top padding",
    },
    paddingBottom: {
      type: "number",
      label: "Bottom padding",
    },
    paddingLeft: {
      type: "number",
      label: "Left padding",
    },
    paddingRight: {
      type: "number",
      label: "Right padding",
    },
  },
  initialValues: {
    hours: 1,
    minutes: 5,
    seconds: 30,
    background: "black",
    color: "white",
    width: "auto",
    textAlign: "center",
    fontFamily: "Arial",
    fontSize: "40px",
    fontWeight: "normal",
    fontStyle: "italic",
    letterSpacing: "normal",
    textDecoration: "none",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
};

export default countdownTimer;
