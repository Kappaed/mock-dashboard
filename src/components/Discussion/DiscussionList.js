import Discussion from "./Discussion";
import styled from "styled-components";
import LogoOne from "../../images/avatars/1.jpg";
import LogoTwo from "../../images/avatars/2.jpg";
import LogoThree from "../../images/avatars/3.jpg";
import Divider from "../UI/Divider";

const DUMMY_DATA = [
  {
    logo: LogoOne,
    name: "James Johnson",
    title: "Hello World!",
    date: "3 days ago",
    data: "Well, the way they make shows is, they make one show ...",
  },
  {
    logo: LogoTwo,
    name: "Bobby Bill",
    title: "Hello World!",
    date: "4 days ago",
    data: "After the avalanche, it took us a week to climb out. Now...",
  },
  {
    logo: LogoThree,
    name: "Adam Maximillian",
    title: "Hello World!",
    date: "5 days ago",
    data: "My money's in that office, right? If she start giving me...",
  },
];

const DiscussionList = () => {
  return (
    <li>
      {DUMMY_DATA.map((preview, index) => (
        <ul key={index}>
          <Discussion
            title={preview.title}
            name={preview.name}
            logo={preview.logo}
            date={preview.date}
            data={preview.data}
          />
          <Divider />
        </ul>
      ))}
    </li>
  );
};

export default DiscussionList;
