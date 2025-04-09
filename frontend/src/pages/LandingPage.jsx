import { Stack} from "@mui/material";
import {cardItems} from "../mockdata";
import NotesCard from "../components/NotesCard";

export default function LandingPage(){
  return(
    <Stack>
    <Stack direction={"row"} gap={5} m={5} overflow={"hidden"} >
      {
        cardItems.map(()=>(
          <NotesCard></NotesCard>
      ))}
    </Stack>
    <Stack direction={"row"} gap={5} m={5} overflow={"hidden"} >
      {
        cardItems.map(()=>(
          <NotesCard></NotesCard>
      ))}
    </Stack>
    <Stack direction={"row"} gap={5} m={5} overflow={"hidden"} >
      {
        cardItems.map(()=>(
          <NotesCard></NotesCard>
      ))}
    </Stack>
    <Stack direction={"row"} gap={5} m={5} overflow={"hidden"} >
      {
        cardItems.map(()=>(
          <NotesCard></NotesCard>
      ))}
    </Stack>
    </Stack>
  )
}
