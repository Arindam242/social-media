import { Input, Avatar } from "@mantine/core"
import { BiSearch } from "react-icons/bi"

const Navbar = () => {
	return (
		<header className='sticky top-0 z-10 bg-white shadow-sm'>
			<div className='flex items-center justify-between h-16 max-w-4xl mx-auto'>
				<a href='/' className='text-2xl font-semibold'>
					Social
				</a>
				<Input icon={<BiSearch />} variant='filled' radius='md' inputMode='text' />
				<div className='flex space-x-5 cursor-pointer'>
					<Avatar radius='md' color='green' />
				</div>
			</div>
		</header>
	)
}

export default Navbar
