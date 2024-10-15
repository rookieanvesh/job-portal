import { Divider } from "@mantine/core"
import SearchBar from "../FindJobs/SearchBar"


const FindJobs = () => {
    return (
    <div className="min-h-[100vh] bg-woodsmoke-950 font-['Roboto']">
    <Divider size="xs" mx="md" />
    <SearchBar/>
</div>
    )
}
export default FindJobs