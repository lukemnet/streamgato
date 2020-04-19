export interface WidgetConfig {
  name: string;
  route: string;
}

const widgets = [
  {
    name: "Countdown Timer",
    route: "/countdowntimer",
  },
  {
    name: "Stream Timer",
    route: "/streamtimer",
  },
  {
    name: "Social media widget",
    route: "/socialmediawidget",
  },
  {
    name: "Last.fm Recent Song",
    route: "/lastfmrecentsong",
  },
] as WidgetConfig[];

export default widgets;
