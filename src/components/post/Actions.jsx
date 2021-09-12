import { BiLike, BiComment, BiShareAlt } from "react-icons/bi"
import { FaRegBookmark } from "react-icons/fa"

export const Actions = () => {
	return (
		<div className='flex justify-between px-4 mb-3'>
			<div className='flex space-x-5'>
				<BiLike className='w-5 h-5' />
				<BiComment className='w-5 h-5' />
				<BiShareAlt className='w-5 h-5' />
			</div>
			<FaRegBookmark className='w-5 h-5' />
		</div>
	)
}
