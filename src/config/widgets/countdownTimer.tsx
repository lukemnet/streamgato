const countdownTimer = {
  name: "Countdown Timer",
  route: "/countdowntimer",
  alias: "cd",
  settings: {
    hours: {
      type: "number",
      label: "Hours",
      shorthand: "h",
    },
    minutes: {
      type: "number",
      label: "Minutes",
      shorthand: "m",
    },
    seconds: {
      type: "number",
      label: "Seconds",
      shorthand: "s",
    },
    background: {
      type: "string",
      label: "Background color",
      shorthand: "bg",
    },
    color: {
      type: "string",
      label: "Text color",
      shorthand: "col",
    },
    width: {
      type: "number",
      label: "Container width",
      shorthand: "w",
    },
    fontFamily: {
      type: "string",
      label: "Font family",
      shorthand: "ff",
    },
    fontSize: {
      type: "string",
      label: "Font size",
      shorthand: "fz",
    },
    fontWeight: {
      type: "string",
      label: "Font weight",
      shorthand: "fw"
    },
    fontStyle: {
      type: "string",
      label: "Font family",
      shorthand: "fs"
    },
    letterSpacing: {
      type: "string",
      label: "Character spacing",
      shorthand: "ls",
    },
    paddingTop: {
      type: "number",
      label: "Top padding",
      shorthand: "pt",
    },
    paddingBottom: {
      type: "number",
      label: "Bottom padding",
      shorthand: "pb",
    },
    paddingLeft: {
      type: "number",
      label: "Left padding",
      shorthand: "pl",
    },
    paddingRight: {
      type: "number",
      label: "Right padding",
      shorthand: "pr",
    },
    customCss: {
      type: "string",
      label: "Custom stylesheet URL",
      shorthand: "cs",
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
