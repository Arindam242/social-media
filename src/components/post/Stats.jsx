import { Text } from "@mantine/core"

export const Stats = ({ post }) => {
	return (
		<div className='flex items-center justify-between px-4 mb-2'>
			<Text size='sm'>
				Liked by <strong>{post.likedBy}</strong> and <strong>993</strong> others.
			</Text>
			<Text size='sm'>
				<strong>93</strong> shares.
			</Text>
		</div>
	)
}
