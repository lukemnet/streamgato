const countdownTimer = {
  name: "Countdown Timer",
  route: "/countdowntimer",
  alias: "cd",
  settings: {
    startValue: {
      type: "number",
    },
    fontFamily: {
      type: "string",
    },
  },
  initialSettings: {
    startValue: 5,
    fontFamily: "Arial",
    fontSize: "40px",
    fontWeight: "normal",
    fontStyle: "italic",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    letterSpacing: "normal",
    textDecoration: "none",
    width: "auto",
    textAlign: "center",
  },
};

export default countdownTimer;
