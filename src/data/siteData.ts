import Anisha from "../assets/avatar-anisha.png";
import Ali from "../assets/avatar-ali.png";
import Richard from "../assets/avatar-richard.png";
import Shanai from "../assets/avatar-shanai.png";

import socialIcons from "../assets/social-icons.svg";

const testimonials = [
  {
    id: 0,
    name: "Anisha Li",
    testimony: `“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`,
    image: Anisha,
  },
  {
    id: 1,
    name: "Ali Bravo",
    testimony: `“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”`,
    image: Ali,
  },
  {
    id: 2,
    name: `Richard Watts`,
    testimony: `“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”`,
    image: Richard,
  },
  {
    id: 3,
    name: `Shanai Gough`,
    testimony: `“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”`,
    image: Shanai,
  },
];

const socialIconsList = [
  { id: "1", icon: `${socialIcons}#icon-facebook`, name: "facebook" },
  { id: "2", icon: `${socialIcons}#icon-youtube`, name: "youtube" },
  { id: "3", icon: `${socialIcons}#icon-twitter`, name: "twitter" },
  { id: "4", icon: `${socialIcons}#icon-pinterest`, name: "pinterest" },
  { id: "5", icon: `${socialIcons}#icon-instagram`, name: "instagram" },
];

const linkTexts = [
  { id: "1", text: "Home" },
  { id: "2", text: "Pricing" },
  { id: "3", text: "Products" },
  { id: "4", text: "About Us" },
  { id: "5", text: "Careers" },
  { id: "6", text: "Community" },
  { id: "7", text: "Privacy Policy" },
];

const navigationLinks_Header = [
  { id: 1, text: "Primary" },
  { id: 2, text: "Product" },
  { id: 3, text: "About Us" },
  { id: 4, text: "Careers" },
  { id: 5, text: "Community" },
];

const featuresItems = [
  {
    id: 0,
    title: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: 1,
    title: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: 2,
    title: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];
export { testimonials, socialIconsList, linkTexts, navigationLinks_Header, featuresItems };
