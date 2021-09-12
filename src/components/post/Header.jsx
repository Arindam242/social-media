import { Avatar, Title, Text } from "@mantine/core"
import { BiDotsVertical } from "react-icons/bi"

export const Header = ({ post }) => {
	return (
		<header className='flex items-center justify-between p-4 items-'>
			<div className='flex items-center space-x-3'>
				<Avatar radius='md' src={post.author.avatar} />
				<div>
					<Title order={6}>{post.author.name}</Title>
					<Text size='xs' color={"gray"}>
						{post.location}
					</Text>
				</div>
			</div>
			<button>
				<BiDotsVertical className='text-base text-gray-500' />
			</button>
		</header>
	)
}
