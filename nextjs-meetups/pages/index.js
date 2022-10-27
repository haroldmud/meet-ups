import MeetupList from "../components/meetups/MeetupList";

const MEETUPS_SAMPLE = [
  {
    id: "F1",
    key: "F1",
    title: "BABAYAGA",
    address: "New-york, 745 KG street",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bdb9681456613.5d00f0f55bc81.png",
  },
  {
    id: "F2",
    key: "F2",
    title: "BABAYAGA",
    address: "Italy, 745 KG street",
    image: "http://www.blurryphotos.org/wp-content/uploads/2013/07/babayaga.png",
  },
  {
    id: "F1",
    key: "F1",
    title: "BABAYAGA",
    address: "Italy, 745 KG street",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9180767f-2561-46e6-a70a-78f0fa796a73/d5j78as-054c3f41-bb4a-48f3-b44d-84636be6822a.jpg/v1/fill/w_900,h_780,q_75,strp/baba_yaga_by_icedwingsart_d5j78as-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzgwIiwicGF0aCI6IlwvZlwvOTE4MDc2N2YtMjU2MS00NmU2LWE3MGEtNzhmMGZhNzk2YTczXC9kNWo3OGFzLTA1NGMzZjQxLWJiNGEtNDhmMy1iNDRkLTg0NjM2YmU2ODIyYS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.3YY-QX2E35mN1F8MX7q3gxIXc033u-Xl8fUbdC9kygk",
  },
];

export default function Home() {
  return (
    
      <MeetupList meetups={MEETUPS_SAMPLE} />)
}
