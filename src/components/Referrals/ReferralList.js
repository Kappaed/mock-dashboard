import Styled from "styled-components";
import ReferralItem from "./ReferralItem";

const DUMMY_DATA = [
  { website: "GitHub", stat: "19,291" },
  { website: "Stack Overflow", stat: "11,201" },
  { website: "Hacker News", stat: "9,291" },
  { website: "Reddit", stat: "8,281" },
  { website: "The Next Web", stat: "7,128" },
  { website: "Tech Crunch", stat: "6,218" },
  { website: "YouTube", stat: "1,218" },
  { website: "Adobe", stat: "827" },
];
const ReferralList = () => {
  return (
    <li>
      {DUMMY_DATA.map((item, index) => {
        return (
          <ul key={index}>
            <ReferralItem website={item.website} stat={item.stat} />
          </ul>
        );
      })}
    </li>
  );
};

export default ReferralList;
